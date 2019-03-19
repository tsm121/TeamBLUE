import React from 'react';
import BitMoji from './BitMoji';


export default class LeftColumn extends React.Component {
  render() {

    const gender = 1;

    return (
      <div className={"left-column"}>
        <BitMoji name={'bit-moji-img-left'} gender={gender} />
      </div>
    );
  }
}
