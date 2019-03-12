import React from 'react';
import { Button, Row, Col, Card } from 'antd';


export default class MenuButton extends React.Component {
  render() {
    const {label, action, type} = this.props

    return (
      <Row type="flex" justify="space-around" align="middle">
      <Button
        className={"menu-button"}
        type={type}
        onClick={action}
      >

        {label}
      </Button>
      </Row>
    );
  }
}
