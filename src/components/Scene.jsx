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
      sceneQuestion: "",
      sceneChoices: {},
      player1: {},
      player2: {},
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.handleSceneChange = this.handleSceneChange.bind(this);
    this.prepareSceneChange = this.prepareSceneChange.bind(this);

  }

  componentWillMount() {
    this.generateInitBitEmoji()

    this.setState({
      sceneBackgroundScr: scenes_lib.scenes["scene_1"]["backgroundURL"],
      sceneChoices: scenes_lib.scenes["scene_1"]["choices"],
      sceneQuestion: scenes_lib.scenes["scene_1"]["question"]
    })
  }

  generateInitBitEmoji() {

    let gender = libmoji.genders[0]; // ["female", 2]
    let style = libmoji.styles[0]; // ["bitstrips", 1]
    let traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    let url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);

    //Generate player 1
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

    // Generate player 2
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

  handleSceneChange (sceneName) {

    console.log("Change scene to " + sceneName)

    this.prepareSceneChange(sceneName)
  }

  prepareSceneChange (sceneName) {

    let newBackground = scenes_lib.scenes[sceneName]["backgroundURL"]
    let newChoices = scenes_lib.scenes[sceneName]["choices"]
    let newQuestion = scenes_lib.scenes[sceneName]["question"]



    this.setState({
      sceneBackgroundScr: newBackground,
      sceneQuestion: newQuestion,
      sceneChoices: newChoices,
    })

  }

  renderGame() {
    const { gameStarted, player1, player2, sceneChoices, sceneQuestion } = this.state;

    if (gameStarted) {
      return (
        <div>
          <InteractionField
            handleSceneChange={this.handleSceneChange}
            choices={sceneChoices}
            question={sceneQuestion}
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
        {this.renderGame()}

      </div>
    );
  }
}
