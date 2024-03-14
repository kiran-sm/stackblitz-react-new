import React, { useState } from 'react';
function Counter() {
  const [updateNumber, setUpdateNumber] = useState(0);
  function incrementHandle() {
    setUpdateNumber(updateNumber + 1);
  }
  function decrementHandle() {
    if (updateNumber > 0) {
      setUpdateNumber(updateNumber - 1);
    }
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={incrementHandle}> + </button>
      <span>{updateNumber}</span>
      <button onClick={decrementHandle}> - </button>
    </div>
  );
}
export default Counter;
