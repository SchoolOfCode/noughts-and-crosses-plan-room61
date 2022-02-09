import React, {useState} from 'react';
import Board from '../Board';
import Result from '../Result';

function Game() {

const initialState = ["","","","","","","","",""]

const [boardState, setBoardState] = useState(initialState);
console.log(boardState);
const [playerTurn, setPlayerTurn] = useState(true); 

function changeSquare(index,value) {
  let playerMark = value? "X" : "O"; 
  setBoardState([...boardState.slice(0,index), playerMark, ...boardState.slice(index + 1)]);
  setPlayerTurn(!playerTurn);
}

  return (
    <main>
      <Result />
      <Board playerTurn= {playerTurn} changeSquare={changeSquare} boardState={boardState}/>
    </main>
  )
}

export default Game