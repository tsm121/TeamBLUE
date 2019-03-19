import React from 'react';
import libmoji from 'libmoji';


export default class BitMoji extends React.Component {

  render() {

    const gender = libmoji.genders[this.props.gender];
    const style = libmoji.styles[libmoji.randInt(3)];
    const traits = libmoji.randTraits(libmoji.getTraits(gender[0],style[0]));
    const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

    const url = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);

    return (
      <div >
        <img className={this.props.name} src={url}/>
      </div>
    );
  }
}
