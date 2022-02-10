import React from 'react'
import Square from '../Square'

function Board({playerTurn, boardState, changeSquare}) {
  return (
    <section>
      {boardState.map( (element,index) => {
        return(
          <Square  
                  changeSquare={changeSquare} 
                  value={element} 
                  index={index} 
                  key={index} 

          />
        )
      }
      )}
    </section>
  )
}

export default Board