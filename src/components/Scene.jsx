import React from 'react';

import InteractionField from './InteractionField';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Menu from './Menu';
import SettingsButton from './SettingsButton';
import libmoji from 'libmoji';

import scenes_lib from './data/scenes.json'


export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: true,
      sceneBackgroundScr: 'https://animatedanatomy.com/images/16-9-dummy-image6.jpg',
      player1: {},
      player2: {},
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.nextScene = this.nextScene.bind(this);

  }

  componentWillMount() {
    this.generateInitBitEmoji()
  }

  generateInitBitEmoji() {

    let gender = libmoji.genders[0]; // ["female", 2]
    let style = libmoji.styles[0]; // ["bitstrips", 1]
    let traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    let url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);


    const tempPlayer1 = {
      bitMojiURL: url,
      bitMojiGender: gender,
      bitMojiSyle: style,
      bitMojiTraits: traits,
      bitMojiOutfit: outfit,
    }

    gender = libmoji.genders[1]; // ["female", 2]
    style = libmoji.styles[0]; // ["bitstrips", 1]
    traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);

    const tempPlayer2 = {
      bitMojiURL: url,
      bitMojiGender: gender,
      bitMojiSyle: style,
      bitMojiTraits: traits,
      bitMojiOutfit: outfit,
    }

    this.setState({
      player1 : tempPlayer1,
      player2: tempPlayer2
    })

  }

  nextScene () {
    console.log("Next scene func")
    console.log(scenes_lib.scenes["scene_1"]["backgroundURL"])

    const newBackground = scenes_lib.scenes["scene_1"]["backgroundURL"]

    this.setState({
      sceneBackgroundScr: newBackground
    })

  }

  renderGame() {
    const { gameStarted, player1, player2 } = this.state;

    if (gameStarted) {
      return (
        <div>
          <InteractionField
            nextScene={this.nextScene}
          />
          <LeftColumn
            bitMoji={player1}
          />
          <RightColumn
            bitMoji={player2}
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
