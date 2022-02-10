  export function checkWinning (squares) {
    let indexArray  = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]]

    for(let i = 0; i < indexArray.length; i++){
      const [a , b , c] = indexArray[i];    
     // if (squares[a]) {
        //console.log(squares[a] + squares[b] + squares[c]);
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          //console.log("we have a winner");
          return squares[a];
        }
       //return false;  
    } 
    return false;
  }  
 
/*
  function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
*/