/* eslint-disable no-param-reassign */
import React from 'react';

import InteractionField from './InteractionField';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Menu from './Menu';
import SettingsButton from './SettingsButton';
import libmoji from 'libmoji';

import scenes_lib from './data/scenes.json'
import Header from './Header';
import Footer from './Footer';


export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gamePaused: false,
      sceneBackgroundScr: 'https://d2wkqk610zk1ag.cloudfront.net/items/010o0d1b390L251l0d39/ShareWithCareBG.jpg?X-CloudApp-Visitor-Id=19240',
      sceneQuestion: "",
      sceneChoices: {},
      currentScene: "atHome",
      playerInteraction: false,
      socialMediaInteraction: false,
      player1: {},
      player2: {},
    };

    this.handleGameStart = this.handleGameStart.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.handleSceneChange = this.handleSceneChange.bind(this);
    this.prepareSceneChange = this.prepareSceneChange.bind(this);
    this.handleGamePaused = this.handleGamePaused.bind(this)

  }

  /*  componentWillMount() {
      this.generateInitBitEmoji()

      this.setState({
        sceneBackgroundScr: scenes_lib.scenes["scene_1"]["backgroundURL"],
        sceneChoices: scenes_lib.scenes["scene_1"]["choices"],
        sceneQuestion: scenes_lib.scenes["scene_1"]["question"],
        playerInteraction: scenes_lib.scenes["scene_1"]["playerInteraction"]

      })
    }*/

  initGame () {
    const {currentScene} = this.state

    this.generateInitBitEmoji()

    this.setState({
      sceneBackgroundScr: scenes_lib.scenes[currentScene]["backgroundURL"],
      sceneChoices: scenes_lib.scenes[currentScene]["choices"],
      sceneQuestion: scenes_lib.scenes[currentScene]["question"],
      playerInteraction: scenes_lib.scenes[currentScene]["playerInteraction"],
      socialMediaInteraction: scenes_lib.scenes[currentScene]["socialMediaInteraction"]

    })
  }

  generateInitBitEmoji() {

    let gender = libmoji.genders[0]; // ["female", 2]
    let style = libmoji.styles[0]; // ["bitstrips", 1]
    let traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    let url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);
    let head = libmoji.buildPreviewUrl('head', 3, gender[1], style[1], 0, traits, outfit);

    //Generate player 1
    const tempPlayer1 = {
      bitMojiURL: url,
      bitMojiGender: gender,
      bitMojiSyle: style,
      bitMojiTraits: traits,
      bitMojiOutfit: outfit,
      bitMojiHead: head,
    }

    gender = libmoji.genders[1]; // ["female", 2]
    style = libmoji.styles[0]; // ["bitstrips", 1]
    traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);
    head = libmoji.buildPreviewUrl('head', 3, gender[1], style[1], 0, traits, outfit);

    // Generate player 2
    const tempPlayer2 = {
      bitMojiURL: url,
      bitMojiGender: gender,
      bitMojiSyle: style,
      bitMojiTraits: traits,
      bitMojiOutfit: outfit,
      bitMojiHead: head,
    }

    this.setState({
      player1 : tempPlayer1,
      player2: tempPlayer2
    })

  }

  handleSceneChange(sceneName) {
    if (sceneName[0] === 'S') {
      console.log('Social Media used')
      sceneName = sceneName.slice(1);
      this.setState({
        socialMediaInteraction: true,
      });
    }
    console.log(sceneName)
    if (sceneName === "ending01") {
      sceneName = this.state.socialMediaInteraction ? "ending03" : "ending05"
    }
    else if (sceneName === "ending02") {
      sceneName = this.state.socialMediaInteraction ? "ending04" : "ending05"
    }
    else if (sceneName === "atHome") {
      this.setState({
        socialMediaInteraction: false,
      });
    }
    console.log("Change scene to " + "'" + sceneName + "'")
    this.prepareSceneChange(sceneName)
  }

  prepareSceneChange(sceneName) {
    const {socialMediaInteraction} = this.state


    let newBackground = scenes_lib.scenes[sceneName]["backgroundURL"]
    let newChoices = scenes_lib.scenes[sceneName]["choices"]
    let newQuestion = scenes_lib.scenes[sceneName]["question"]
    let newPlayerInteraction = scenes_lib.scenes[sceneName]["playerInteraction"]

    this.setState({
      sceneBackgroundScr: newBackground,
      sceneQuestion: newQuestion,
      sceneChoices: newChoices,
      playerInteraction: newPlayerInteraction,
      currentScene: sceneName,
    })
  }

  handleGameStart() {
    this.initGame()
    console.log("Starting game")
    this.setState(state => ({
      gameStarted: !state.gameStarted,
    }));
  }

  handleGamePaused () {

    const {gamePaused, currentScene} = this.state

    if (!gamePaused) {
      this.setState(state => ({
        gamePaused: !state.gamePaused,
        sceneBackgroundScr: 'https://d2wkqk610zk1ag.cloudfront.net/items/010o0d1b390L251l0d39/ShareWithCareBG.jpg?X-CloudApp-Visitor-Id=19240'
      }));
    }

    else if (gamePaused) {
      this.setState(state => ({
        gamePaused: !state.gamePaused,
        sceneBackgroundScr: scenes_lib.scenes[currentScene]["backgroundURL"]
      }));
    }


  }

  renderGame() {
    const { gameStarted, gamePaused, player1, player2, sceneChoices, sceneQuestion, playerInteraction } = this.state;

    if(!gameStarted && !gamePaused) {
      return (

        <Menu
          handleGameStarted={this.handleGameStart}
          paused={gamePaused}
        />

      );
    }

    if (gameStarted && !gamePaused) {
      return (
        <div>
          <InteractionField
            handleSceneChange={this.handleSceneChange}
            choices={sceneChoices}
            question={sceneQuestion}
            player1Avatar={player1.bitMojiHead}
            player2Avatar={player2.bitMojiHead}
          />
          <LeftColumn
            bitMoji={player1}
          />
          <RightColumn
            bitMoji={player2}
            settingsAction={this.handleGamePaused}
            hideBitMoji={playerInteraction}
          />
        </div>

      );
    } if (gamePaused && gameStarted) {
      return (

        <Menu
          handleGameStarted={this.handleGamePaused}
          paused={gamePaused}
        />

      );
    }
  }


  render() {
    const { sceneBackgroundScr, gameStarted, gamePaused } = this.state;
    return (
      <div
        className="scene"
        style={{ backgroundImage: `url(${sceneBackgroundScr})` }}
      >

        {!gameStarted || (gameStarted && gamePaused)?  <Header/> : ""}

        {this.renderGame()}

        {!gameStarted || (gameStarted && gamePaused)?  <Footer/> : ""}

      </div>
    );
  }
}
