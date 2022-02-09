  let indexArray  = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]]


  const initialState = ["X","X","X",
                      "","","",
                      "","",""];

  function checkWinning (element) {
    const [a , b , c] = element;
    console.log(initialState[a],initialState[b],initialState[c]);     
    //if (initialState[a] !=="") {
      if(initialState[a] === initialState[b] && initialState[a] === initialState[c]) {
        console.log("winning");
        return "Win";
        
      }else {
        console.log("loosing");
        return 0;
      }
    //}else {
    // return 0 
  //}
}

  console.log(indexArray.forEach(element => checkWinning(element)));
  console.log("hello");
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