import React from 'react';
import { Button, Row, Col, Card } from 'antd';
import Choices from './Choices';


export default class InteractionField extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextSceneButton = this.handleNextSceneButton.bind(this)

  }


  handleNextSceneButton () {
    const {handleSceneChange} = this.props
    handleSceneChange()
  }

  render() {

    const {choices, handleSceneChange, question} = this.props

    return (
      <div className="interaction-field">
        <Row span={24} className={"interaction-row"} type="flex" justify="center" align="middle" >

          <Card className={"interaction-card"}>



            <Col span={24}>

              <Row>

                <Col span={8} className={"interaction-top-col"}>
                  Question
                </Col>

                <Col span={16} className={"interaction-top-col"}>
                  Choices
                </Col>

              </Row>

              <Row>

            <Col span={8} className="interaction-text">
              <Row type="flex" justify="center" align="middle">
              <p>{question} </p>
              </Row>
            </Col>

            <Col span={16}>
              <Row type="flex" justify="center" align="middle">
                <Choices
                  choices={choices}
                  handleSceneChange={handleSceneChange}
                />
              </Row>
            </Col>

              </Row>
            </Col>

          </Card>
        </Row>
      </div>
    );
  }
}
