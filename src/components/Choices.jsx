import React from 'react';
import { Button, Row, Col } from 'antd';

export default class Choices extends React.Component {
  handleButtonPress(scene) {
    const { handleSceneChange } = this.props;
    handleSceneChange(scene);
  }

  generateButtons() {
    const { choices } = this.props;

    return [
      Object.entries(choices).map(([choiceNum, value]) => (
        <Button
          type="primary"
          className="choice-button"
          onClick={e => this.handleButtonPress(value.scene)}
          key={choiceNum}
          style={{
            whiteSpace: 'normal',
            padding: '16px',
            minWidth: '160px',
            width: '45%',
            height: 'auto',
            minHeight: '32px',
          }}
        >
          {value.text}
        </Button>
      )),
    ];
  }

  render() {
    const buttons = this.generateButtons();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '32px',
          paddingLeft: '16px',
          paddingTop: '0',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {buttons[0][0]}
          {buttons[0][1]}
          {buttons[0][2]}
          {buttons[0][3]}
        </div>
      </div>
    );
  }
}
