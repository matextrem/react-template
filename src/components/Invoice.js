import React from 'react';
import { Card, CardHeader, Row, Col, Table } from 'reactstrap';
import './Invoice.scss';

class Invoice extends React.Component {
  render() {
    return (
      <div className="invoice-container">
        <div />
        <h3>
          Invoice <span className="subtitle">SO3834754</span>
        </h3>
        <Card>
          <CardHeader className="header">Invoice - Revision</CardHeader>
          <Row>
            <Col className="item" sm="3">
              <div>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Invoice #</td>
                      <td>33-0092kk00</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>7/31/18</td>
                    </tr>
                    <tr>
                      <td>Due Date</td>
                      <td>7/31/18</td>
                    </tr>
                    <tr>
                      <td>Terms</td>
                      <td>Net 0</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col className="item" sm="6">
              <div className="bill-details">Bill to</div>
            </Col>
            <Col className="item" sm="3">
              <div className="product-details">
                <p className="title">New Balance upon Re-booking</p>
                <p className="price">$52.45</p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Invoice;
