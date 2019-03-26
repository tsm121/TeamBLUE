import React from 'react';
import {
  Button, Card, Col, Row, Icon,
} from 'antd';
import MenuButton from './MenuButton';


export default class Menu extends React.Component {
  generateTitle() {
    return (
      <Row type="flex" justify="center" align="middle">
        <h1>
          <Icon type="smile" />
          {' '}
Share with care
        </h1>

      </Row>
    );
  }

  render() {
    const { handleGameStarted, paused } = this.props;

    return (
      <Row type="flex" justify="space-around" align="middle" className="menu">
        <Card
          title={this.generateTitle()}
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
