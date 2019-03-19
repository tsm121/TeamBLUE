import React from 'react';

import InteractionField from './InteractionField';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Menu from './Menu';
import SettingsButton from './SettingsButton';


export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: true,
      sceneBackgroundScr: 'https://animatedanatomy.com/images/16-9-dummy-image6.jpg',
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.renderGame = this.renderGame.bind(this);
  }

  renderGame() {
    const { gameStarted } = this.state;

    if (gameStarted) {
      return (
        <div>
          <InteractionField />
          <LeftColumn />
          <RightColumn
            settingsAction={this.handleGameStart}
          />
        </div>

      );
    } if (!gameStarted) {
      return (

        <Menu
          handleGameStarted={this.handleGameStart}
        />

      );
    }
  }

  handleGameStart() {
    this.setState(state => ({
      gameStarted: !state.gameStarted,
    }));
  }


  render() {
    const { sceneBackgroundScr } = this.state;
    return (
      <div
        className="scene"
        style={{ backgroundImage: `url(${sceneBackgroundScr})` }}
      >
        <h1>Scene</h1>

        {this.renderGame()}

      </div>
    );
  }
}
