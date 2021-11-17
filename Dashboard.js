import React from 'react';
import { Link } from '@reach/router';
const DashboardComponent = (props) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>The word is: hello</h3>
      <Link to='/hello/blue/red'>site: color</Link> |{' '}
      <Link to='/home'>site: home</Link>
    </div>
  );
};

export default DashboardComponent;
