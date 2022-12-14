import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Ratings = ({goodRanks, neutralRanks, badRanks}) => {
  return (
    <div>
      <p>Good {goodRanks}</p>
      <p>Neutral {neutralRanks}</p>
      <p>Bad {badRanks}</p>
    </div>
  )
}

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Ratings goodRanks={good} neutralRanks={neutral} badRanks={bad} />
    </div>
  )
}

export default App