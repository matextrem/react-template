import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import {
  Breadcrumb,
  Dropdown,
  BreadcrumbItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faQuestionCircle,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Breadcrumb className="breadcrumb">
            <BreadcrumbItem className="item">Dashboard</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
            <BreadcrumbItem className="item">Billing</BreadcrumbItem>
            <BreadcrumbItem className="item">Network</BreadcrumbItem>
          </Breadcrumb>
          <div className="text-right menu-icons">
            <FontAwesomeIcon size="2x" icon={faSearch} />
            <FontAwesomeIcon size="2x" icon={faQuestionCircle} />
            <FontAwesomeIcon size="2x" icon={faBell} />
            <Dropdown className="user-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle>
                <div className="dropdown">
                  <span>JS</span>
                </div>
                <FontAwesomeIcon className="angle-down" icon={faAngleDown} />
              </DropdownToggle>
              <DropdownMenu className="custom-menu">
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <header className="App-header">
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
