import React, {useState} from 'react';
import Board from '../Board';
import Result from '../Result';
import { checkWinning } from '../../logicGame';

function Game() {

const initialState = [null,null,null,
                      null,null,null,
                      null,null,null];
const [boardState, setBoardState] = useState(initialState);
console.log(boardState);
const [playerTurn, setPlayerTurn] = useState("X");
let winner = checkWinning(boardState); 

function changeSquare(index) {

  if( winner || boardState[index]){
    return;
  }
  setBoardState([...boardState.slice(0,index), playerTurn, ...boardState.slice(index + 1)]);
  console.log(boardState);
  setPlayerTurn(playerTurn === "X"? "O": "X");
}

  return (
    <main>
      <Result winner={winner} playerTurn={playerTurn}/>
      <Board changeSquare={changeSquare} boardState={boardState}/>
    </main>
  )
}

export default Game