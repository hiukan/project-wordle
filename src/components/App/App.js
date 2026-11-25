import { useState } from 'react'
import Game from '../Game'
import Guess from '../Guess/Guess'
import Header from '../Header'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js'
import { sample } from '../../utils'
import { WORDS } from '../../data'

import { checkGuess } from '/src/game-helpers.js'

function App() {
  const [guesses, setGuesses] = useState([])
  const rg = range(0, NUM_OF_GUESSES_ALLOWED, 1)
  // Pick a random word on every pageload.
  const [answer] = useState(() => sample(WORDS))
  const [state, setState] = useState('')
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game
          setGuesses={setGuesses}
          answer={answer}
          setState={setState}
          guesses={guesses}
        />
        {state === 'won' && (
          <div class="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
          </div>
        )}
        {state === 'lost' && (
          <div class="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
        <div className="guess-results">
          {rg.map((i) => (
            <Guess
              guess={guesses[i]}
              validity={checkGuess(guesses[i], answer)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
