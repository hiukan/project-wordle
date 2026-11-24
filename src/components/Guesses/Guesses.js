import React from 'react'

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((g, i) => (
        <p className="guess" key={`${g}-${i}`}>
          {g}
        </p>
      ))}
    </div>
  )
}

export default Guesses
