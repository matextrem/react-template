import React from 'react';
import { Card, CardHeader, Row, Col, Table } from 'reactstrap';
import './Overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview-container">
        <Card>
          <CardHeader className="header">Overview</CardHeader>
          <Row>
            <Col className="item" sm="6">
              <div>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Status</td>
                      <td className="text-right status">Active</td>
                    </tr>
                    <tr>
                      <td>Method</td>
                      <td className="text-right">Multimodal</td>
                    </tr>
                    <tr>
                      <td>Capacity</td>
                      <td className="text-right">LCL</td>
                    </tr>
                    <tr>
                      <td>Drayage</td>
                      <td className="text-right">Pickup, Delivery</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col className="item" sm="6">
              <div>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Incoterms</td>
                      <td className="text-right">FOB</td>
                    </tr>
                    <tr>
                      <td>Service Options</td>
                      <td className="text-right">
                        Deconsolidation. Customs Clearance,
                        <br />
                      </td>
                    </tr>
                    <br/>
                    <tr>
                      <td>Hazardous or forbidden commodities</td>
                      <td className="text-right">
                        Lithium Batteries, Hazmat, Other
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Overview;
