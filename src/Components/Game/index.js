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
const [playerTurn, setPlayerTurn] = useState(true);
const [winner, setWinner] = useState(null); 
console.log(winner);

function changeSquare(index,value) {
  if(winner || boardState[index]){
    return;
  }
  let playerMark = value? "X" : "O"; 
  setWinner(checkWinning(boardState));
  setBoardState([...boardState.slice(0,index), playerMark, ...boardState.slice(index + 1)]);
  setWinner(checkWinning(boardState));
  setPlayerTurn(!playerTurn);
  
}

  return (
    <main>
      <Result winner={winner} playerTurn={playerTurn}/>
      <Board playerTurn= {playerTurn} changeSquare={changeSquare} boardState={boardState}/>
    </main>
  )
}

export default Game