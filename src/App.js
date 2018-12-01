import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="App">
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <header className="App-header">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </header>
  </div>
);

export default App;
