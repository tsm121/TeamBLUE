import React from 'react';
import {
  Button, Card, Col, Row, Icon,
} from 'antd';
import MenuButton from './MenuButton';


export default class Menu extends React.Component {


  render() {
    const { handleGameStarted, paused } = this.props;

    return (
      <Row type="flex" justify="space-around" align="middle" className="menu">
        <Card
          className="menu-content"
        >
          <MenuButton
            label={paused? "Continue game" : "Join Game"}
            type="primary"
            action={handleGameStarted}
          />

          <MenuButton
            label={paused? "Exit game" : "Create game"}
            type="default"
          />


          <MenuButton
            label="Tutorial"
            type="default"
          />

          <MenuButton
            label="Help"
            type="danger"
          />
        </Card>
      </Row>
    );
  }
}
