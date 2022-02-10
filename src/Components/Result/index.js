import React from 'react'

function Result({playerTurn, winner}) {
  return (
    <section>
      <h2>Turn: {playerTurn}</h2>
      <h2>Winner: {winner}</h2>
    </section>
  )
}

export default Result