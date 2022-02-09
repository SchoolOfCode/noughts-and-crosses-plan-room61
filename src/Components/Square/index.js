import React,{useState} from 'react';

function Square({changeSquare, value, playerTurn,  index}) {

  return (
    <button onClick={() => {changeSquare(index,playerTurn)} }>{value}</button>
  )
}

export default Square