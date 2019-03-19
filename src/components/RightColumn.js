import React from 'react';
import { Row, Col } from 'antd';
import SettingsButton from './SettingsButton';
import BitMoji from './BitMoji';


export default class RightColumn extends React.Component {
  render() {
    const {settingsAction} = this.props
    const gender =  0
    return (

      <div className={"right-column"}>
        <Row>

          <Col span={21}>
            <h1>Right Column</h1>
            <BitMoji name={'bit-moji-img-right'} gender={gender} />

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
