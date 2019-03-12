import React from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import Scene from '../components/Scene';
import '../styles/index.css';

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
    // const { response } = this.state;
    // console.log(response);

    return (
      <div>
        <Scene />
      </div>
    );
  }
}
