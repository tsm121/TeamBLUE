import React from 'react';
import libmoji from 'libmoji';
import { Button } from 'antd';


export default class BitMoji extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitMojiURL : "",
      bitMojiGender : [],
      bitMojiSyle : [],
      bitMojiTraits: [],
      bitMojiOutfit: []

    }

    this.generateInitBitEmoji = this.generateInitBitEmoji.bind(this)
    this.generateNewPose = this.generateNewPose.bind(this)
  }


  componentWillMount() {
    this.generateInitBitEmoji()
  }

  generateInitBitEmoji () {

    const gender = libmoji.genders[this.props.gender]; // ["female", 2]
    const style = libmoji.styles[0]; //["bitstrips", 1]
    const traits = libmoji.randTraits(libmoji.getTraits(gender[0],style[0]));
    const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    const url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);

    this.setState(() => ({
      bitMojiURL: url,
      bitMojiGender: gender,
      bitMojiSyle: style,
      bitMojiTraits: traits,
      bitMojiOutfit: outfit
    }))
  }

  generateNewPose () {
    const {bitMojiGender, bitMojiSyle, bitMojiTraits, bitMojiOutfit} = this.state

    const newURL = libmoji.buildPreviewUrl("head", 3, bitMojiGender[1], bitMojiSyle[1], 0, bitMojiTraits, bitMojiOutfit )
    console.log(newURL)

  }



  render() {
    const {bitMojiURL} = this.state

    return (
      <div >
        <img className={this.props.name} src={bitMojiURL}/>
        <Button
          onClick={this.generateNewPose}
        > Pose </Button>
      </div>
    );
  }
}
