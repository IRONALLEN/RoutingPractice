import React from 'react';
import { Link } from '@reach/router';
const Colors = (props) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: 'pink',
          color: 'blue',
          fontSize: '19px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <h3>The word is: hello</h3>
      </div>
      <Link to='/hello'>site: hello</Link> | <Link to='/home'>site: home</Link>
    </div>
  );
};

export default Colors;
