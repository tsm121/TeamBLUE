import React from 'react';
import { Row, Col } from 'antd';
import SettingsButton from './SettingsButton';


export default class RightColumn extends React.Component {
  render() {
    const {settingsAction} = this.props

    return (
      <div className={"right-column"}>
        <Row>

          <Col span={21}>
            <h1>Right Column</h1>
          </Col>

          <Col span={3}>
            <SettingsButton
              action={settingsAction}
            />
          </Col>
        </Row>

      </div>
    );
  }
}
