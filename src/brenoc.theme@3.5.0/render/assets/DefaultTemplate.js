import React from 'npm.react/react.js';
import Placeholder from 'vtex.sdk/Placeholder.js';

export default function() {
  return (
    <div>
      Header
      <hr/>
      <Placeholder id={'body'}/>
      <hr/>
      Footer
    </div>
  );
}
