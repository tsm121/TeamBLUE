import React from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      endpoint: 'localhost:4001',
      playerId: '',
      socket: null,
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

    let playerId;
    axios.get(`http://${endpoint}/newConnection`)
      .then((res) => {
        if (res.data && res.data.playerId) {
          ({ playerId } = res.data);
        }

        axios.post(`http://${endpoint}/update`, { playerId, update: 'ready' })
          .then((innerRes) => {
            if (innerRes.data.success) {
              socket.on('playerUpdate', data => this.setState({
                response: data,
                playerId,
                socket,
              }));
            }
          });
      });
  }

  render() {
    const { response } = this.state;

    return (
      <div>
        { response
          ? (
            <p>
            Oppdatering fra socket:
            player1:
              { response.player1 }
            player2:
              { response.player2 }
            </p>
          )
          : (<p>Loading...</p>)
        }
      </div>
    );
  }
}
