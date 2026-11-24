import React from 'react'
import { range } from '../../utils'

function Guess({ guess, validity }) {
  const numberOfSpans = range(0, 5, 1)

  return (
    <p className="guess">
      {numberOfSpans.map((i) => (
        <span
          className={`cell ${
            validity && validity[i] ? validity[i].status : ''
          }`}
          key={`${i}`}
        >
          {guess ? guess[i] : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess
