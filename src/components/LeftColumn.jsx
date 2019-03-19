import React from 'react';
import BitMoji from './BitMoji';


export default class LeftColumn extends React.Component {
  render() {
    const gender = 1;
    const {bitMoji, generateNewOutfit} = this.props;

    return (
      <div className="left-column">
        <BitMoji name="bit-moji-img-left" player={bitMoji} user={1} />

      </div>
    );
  }
}
