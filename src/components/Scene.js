import React from 'react';

import InteractionField from './InteractionField';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';


export default class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneBackgroundScr: "https://animatedanatomy.com/images/16-9-dummy-image6.jpg"
    };
  }

  render() {
    const {sceneBackgroundScr} = this.state
    return (
      <div
        className={"scene"} style={{backgroundImage: 'url(' + sceneBackgroundScr + ')'}}
      >
        <h1>Scene</h1>

        <InteractionField/>
        <LeftColumn/>
        <RightColumn/>
      </div>
    );
  }
}
