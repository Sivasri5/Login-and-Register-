import React from 'react';
import Authpage from '../component/Authpage';


function Authform({ setAuth }) {
  return (
    <div>
      <Authpage setAuth={setAuth} />
    </div>
  );
}

export default Authform;