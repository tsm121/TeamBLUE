import React from 'react';
import BitMoji from './BitMoji';


export default class RightColumn extends React.Component {
  render() {

    const gender = 0;

    return (
      <div className={"right-column"}>
        <BitMoji name={'bit-moji-img-right'} gender={gender} />
      </div>
    );
  }
}
