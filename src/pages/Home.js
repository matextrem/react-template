import React from 'react';
import Invoice from '../components/Invoice';
import Overview from '../components/Overview';
import Diagram from '../components/Diagram';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Invoice />
        <Diagram />
        <Overview />
      </div>
    );
  }
}
export default Home;
