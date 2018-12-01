import React from 'react';
import { Card, CardHeader, Row, Col } from 'reactstrap';
import './Diagram.scss';

class Diagram extends React.Component {
  render() {
    return (
      <div className="diagram-container">
      <Card>
        <CardHeader>Text</CardHeader>
        <Row>
          <Col className="item" sm="12">
            <div>Hola 1</div>
          </Col>
        </Row>
      </Card>
    </div>
    );
  }
}
export default Diagram;