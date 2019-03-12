import React from 'react';
import { Button, Row, Col, Card } from 'antd';


export default class SettingsButton extends React.Component {
  render() {
    const {action} = this.props
    return (
        <Button
          icon={"setting"}
          onClick={action}
          shape={"circle"}
          type={"default"}
        />
    );
  }
}
