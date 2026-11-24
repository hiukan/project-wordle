import React, { useState } from 'react'

import { checkGuess } from '/src/game-helpers.js'
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js'

// To make debugging easier, we'll log the solution in the console.

function Game({ setGuesses, guesses, answer, setState }) {
  const [input, setInput] = useState('')
  const [inputDisabled, setInputDisabled] = useState('false')
  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        setGuesses((prev) => [...prev, input])
        setInput('')
        const currentValidity = checkGuess(input, answer)
        let countValid = 0
        for (i = 0; i < input.length; i++) {
          if (currentValidity[i].status !== 'correct') {
            countValid++
          }
        }
        if (countValid === 0) {
          setState('won')
          setInputDisabled(true)
        } else if (guesses && guesses.length >= NUM_OF_GUESSES_ALLOWED) {
          setState('lost')
          setInputDisabled(true)
        }
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        disabled={!inputDisabled}
        required
        maxLength={5}
        pattern="\w{5,5}"
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default Game
