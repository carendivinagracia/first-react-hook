import React, { useState } from "react";
import useCount from './useCount';

function Hooks() {
  const [count, updateCount] = useState(0);
  const totalCount = useCount(count);

  return (
    <div
      style={{
        padding: '2rem'
      }}
    >
      <div style={{ display: 'flex' }}>
        <p style={{ marginRight: 10 }}>You clicked {totalCount} times</p>
        <button onClick={() => updateCount(count + 1)}>Update number of clicks</button>
      </div>
    </div>
  );
}

export default Hooks;
