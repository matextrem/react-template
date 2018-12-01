import React from 'react';
import { Card, CardHeader, Row, Col } from 'reactstrap';
import './Overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview-container">
        <h1>Overview</h1>
        <Card>
          <CardHeader>Header</CardHeader>
          <Row>
            <Col className="item" sm="6">
              <div>Hola 1</div>
            </Col>
            <Col className="item" sm="6">
              <div>Hola 2</div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Overview;