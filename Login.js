import React from 'react';
import { Link } from '@reach/router';
const LoginComponent = (props) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>The number is: 4</h3>
      <Link to='/hello'>site: hello</Link> | <Link to='/home'>site: home</Link>
    </div>
  );
};
export default LoginComponent;
