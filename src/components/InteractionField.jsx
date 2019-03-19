import React from 'react';
import { Button, Row, Col, Card } from 'antd';
import Choices from './Choices';


export default class InteractionField extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextSceneButton = this.handleNextSceneButton.bind(this)

  }


  handleNextSceneButton () {
    const {nextScene} = this.props

    console.log("NextScene btn pressed")

    nextScene()
  }

  render() {

    return (
      <div className="interaction-field">
        <Row className={"interaction-row"} type="flex" justify="center" align="middle" >

          <Card className={"interaction-card"}>

            <Col span={8} style={{backgroundColor:"red"}}>
              <Row type="flex" justify="center" align="middle">
              <p>This is a text, this is a text, this is a text, this is a text, this is a text, </p>
              </Row>
            </Col>

            <Col span={16} style={{backgroundColor:"blue"}}>
              <Row type="flex" justify="center" align="middle">
                <Choices/>
              <Button
                onClick={this.handleNextSceneButton}
              >
                Next Scene
              </Button>
              </Row>
            </Col>

          </Card>
        </Row>
      </div>
    );
  }
}
