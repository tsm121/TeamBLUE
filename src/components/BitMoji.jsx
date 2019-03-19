import React from 'react';
import libmoji from 'libmoji';
import { Button } from 'antd';


export default class BitMoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player : this.props.user,
      bitMojiURL: this.props.player.bitMojiURL,
      bitMojiGender: this.props.player.bitMojiGender,
      bitMojiSyle: this.props.player.bitMojiGender,
      bitMojiTraits: this.props.player.bitMojiTraits,
      bitMojiOutfit: this.props.playerbitMojiOutfit,

    };

    this.handleOnClick = this.handleOnClick.bind(this)

  }

  handleOnClick () {
    const { player } = this.state
    const { generateNewOutfit } = this.props

    generateNewOutfit(player)

  }


  render() {
    const { bitMojiURL } = this.state;
    const { generateNewOutfit } = this.props

    return (
      <div>
        <img className={this.props.name} src={bitMojiURL} />
      </div>
    );
  }
}
