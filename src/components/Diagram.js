import React from 'react';
import { Card, CardHeader, Row, Col, Button, ButtonGroup } from 'reactstrap';
import './Diagram.scss';

class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diagramActive: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(param) {
    switch (param) {
      case 'diagram':
        this.setState({ diagramActive: true });
        break;
      case 'map':
        this.setState({ diagramActive: false });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="diagram-container">
        <Card>
          <CardHeader>
            <Row>
              <Col sm="9">
                <div className="header">
                  <span>Text</span>
                </div>
              </Col>
              <Col sm="3" className="text-right">
                <div>
                  <ButtonGroup>
                    <Button
                      onClick={() => this.handleClick('diagram')}
                      outline
                      color="secondary"
                      active={this.state.diagramActive}
                    >
                      Diagram
                    </Button>
                    <Button
                      onClick={() => this.handleClick('map')}
                      outline
                      color="secondary"
                      active={!this.state.diagramActive}
                    >
                      Map
                    </Button>
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <Row>
            <Col className="item" sm="12">
              {this.state.diagramActive ? (
                <div>
                <img className="diagram-image" src="/images/diagram.png" alt="Diagram"/>
                </div>
              ) : (
                <div className="text-center">
                <img className="map-image" src="/images/map.png" alt="Map"/>
                </div>
              )}
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default Diagram;
