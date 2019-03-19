import React from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import Scene from '../components/Scene';
import '../styles/index.css';
import 'antd/dist/antd.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false, // Holds the updated state from socketServer
      endpoint: 'localhost:4001',
      playerId: '',
      socket: undefined,
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    let { socket } = this.state;

    let playerId;
    // GET call gets a player ID from /newConnection route
    axios.get(`http://${endpoint}/newConnection`)
      .then((res) => {
        if (res.data && res.data.playerId) {
          ({ playerId } = res.data);
        }

        socket = socket || socketIOClient(endpoint);
        // Posts a ready update to server side playerUpdates object
        axios.post(`http://${endpoint}/update`, { playerId, update: 'ready' })
          .then((innerRes) => {
            if (innerRes.data.success) {
              // If POST resolves, component starts subscribing to socket updates, and puts it into state.
              socket.on('playerUpdate', data => this.setState({
                response: data,
                playerId,
                socket,
              }));
            }
          });
      })
      .catch((err) => {
        this.setState({ response: false, playerId: '', socket: undefined });
      });
  }

  render() {
    // Logs the response from running socket-server
    // const { response } = this.state;
    // console.log(response);

    return (
      <div>
        <Scene />
      </div>
    );
  }
}
