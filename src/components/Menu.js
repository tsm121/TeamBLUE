import React from 'react';
import MenuButton from './MenuButton';
import { Button, Card, Col, Row, Icon } from 'antd';


export default class Menu extends React.Component {

  generateTitle () {

    return(
      <Row type="flex" justify="center" align="middle">
        <h1><Icon type="smile" /> Share with care</h1>

      </Row>
    )

  }

  render() {
    const {handleGameStarted} = this.props

    return (
      <Row type="flex" justify="space-around" align="middle" className={"menu"}>
        <Card
          title={this.generateTitle()}
          className={"menu-content"}
        >
          <MenuButton
            label={"Join Game"}
            type={"primary"}
            action={handleGameStarted}
          />

          <MenuButton
            label={"Create Game"}
            type={"default"}
          />


          <MenuButton
            label={"Tutorial"}
            type={"default"}
          />

          <MenuButton
            label={"Help"}
            type={"danger"}
          />
        </Card>
      </Row>
    );
  }
}
