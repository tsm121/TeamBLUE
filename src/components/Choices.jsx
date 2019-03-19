import React from 'react';
import { Button, Row, Col, Card } from 'antd';


export default class Choices extends React.Component {

  render() {

    return (
      <Row>
        <Col>

          <Button>
            Choice 1
          </Button>

          <Button>
            Choice 2
          </Button>

        </Col>

        <Col>

          <Button>
            Choice 3
          </Button>

          <Button>
            Choice 4
          </Button>

        </Col>
      </Row>
    );
  }
}
