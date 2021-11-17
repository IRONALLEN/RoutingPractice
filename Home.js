import React from 'react';
import { Link } from '@reach/router';
const Home = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome</h1>
      <Link to='/4'>site: 4</Link>
    </div>
  );
};
export default Home;
