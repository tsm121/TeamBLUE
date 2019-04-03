import React from 'react';
import {
  Button, Row, Col, Card, Avatar,
} from 'antd';
import Countdown from 'react-countdown-now';
import Choices from './Choices';
import Scene from './Scene';
import App from '../pages/App';
import Menu from './Menu';

const renderer = ({ seconds, completed }) => {
  if (completed) {
    // Render a complete state

    return 'Time ran out';
  }
  // Render a countdown
  return <span>{seconds}</span>;
};

export default class InteractionField extends React.Component {
  constructor(props) {
    super(props);

    this.handleNextSceneButton = this.handleNextSceneButton.bind(this);
  }

  handleNextSceneButton() {
    const { handleSceneChange } = this.props;
    handleSceneChange();
  }

  render() {
    const {
      choices, handleSceneChange, question, player1Avatar, player2Avatar,
    } = this.props;

    return (
      <div className="interaction-field">
        <Row span={24} className="interaction-row" type="flex" justify="center" align="middle">
          <Card className="interaction-card">
            <Col span={24} className="interaction-container">
              <Row>
                <Col span={12} className="interaction-top-col">
                  Question
                </Col>

                <Col span={12} className="interaction-top-col">
                  Choices
                </Col>
              </Row>

              <Row>
                <Col span={12} className="interaction-text" style={{ height: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '32px',
                      paddingRight: '16px',
                      paddingTop: '0',
                      alignContent: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <p>{question}</p>
                  </div>
                </Col>

                <Col span={12}>
                  <Choices choices={choices} handleSceneChange={handleSceneChange} />
                </Col>
              </Row>
              <Row className="player-info-container">
                <Col span={8} className="player-info-left">
                  <Avatar src={player1Avatar} />
                  <h4 className="player-name-left">John</h4>
                </Col>

                <Col span={8} className="time-info">
                  <h4 className="counter">
                    <Countdown date={Date.now() + 30000} renderer={renderer} />
                  </h4>
                </Col>

                <Col span={8} className="player-info-right">
                  <h4 className="player-name-right">Jane</h4>
                  <Avatar src={player2Avatar} />
                </Col>
              </Row>
            </Col>
          </Card>
        </Row>
      </div>
    );
  }
}
