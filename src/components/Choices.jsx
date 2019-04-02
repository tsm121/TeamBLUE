import React from 'react';
import { Button, Row, Col, Card } from 'antd';


export default class Choices extends React.Component {

  handleButtonPress (scene) {
    const {handleSceneChange} = this.props
    handleSceneChange(scene)
  }

  generateButtons () {
    const {choices} = this.props

    return ( [Object.entries(choices).map(([choiceNum, value]) => {
      return(
        <Button
          type="primary"
          className={"choice-button"}
          onClick={(e) => this.handleButtonPress(value["scene"])}
          keu={choiceNum}
        >
          {value["text"]}
        </Button>
      )
    })])
  }

  render() {
    let buttons = this.generateButtons()

    return (
      <Row>
        <Col>

          {buttons[0][0]}

          {buttons[0][1]}

        </Col>

        <Col>

          {buttons[0][2]}

          {buttons[0][3]}
        </Col>

      </Row>
    );
  }
}
