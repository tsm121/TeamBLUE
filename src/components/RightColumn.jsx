import React from 'react';
import { Row, Col } from 'antd';
import SettingsButton from './SettingsButton';
import BitMoji from './BitMoji';


export default class RightColumn extends React.Component {
  render() {
    const { settingsAction, bitMoji, hideBitMoji } = this.props;
    const gender = 0;
    return (
      <div className="right-column">
        <Row>

          <Col span={21}>
            <div style={hideBitMoji ? {display:"none"} : {display:"unset"}}>
            <BitMoji name="bit-moji-img-right" player={bitMoji} user={2} />
            </div>

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
