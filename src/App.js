import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App = () => (
  <div className="App">
    <div>
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
      <div className="text-right menu-icons">ICONSSS</div>
    </div>
    <header className="App-header">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </header>
  </div>
);

export default App;
