import React from 'react'

function Result({playerTurn, winner}) {
  return (
    <section>
      <h2>Turn: {playerTurn ? "X":"O"}</h2>
      <h2>{winner}</h2>
    </section>
  )
}

export default Result