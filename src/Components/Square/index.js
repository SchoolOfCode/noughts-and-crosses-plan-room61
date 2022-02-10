import React from 'react';

function Square({changeSquare, value, index}) {

  return (
    <button onClick={() => {changeSquare(index)} }>{value}</button>
  )
}

export default Square