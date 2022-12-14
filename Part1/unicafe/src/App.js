import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Ratings = ({goodRanks, neutralRanks, badRanks, total}) => {
  return (
    <div>
      <p>Good: {goodRanks}</p>
      <p>Neutral: {neutralRanks}</p>
      <p>Bad: {badRanks}</p>
      <p>Total: {total}</p>
      <p>Average: {((goodRanks * 1) + (neutralRanks * 0) + (badRanks * -1)) / total}</p>
      <p>Positive: {(goodRanks / total) * 100}%</p>
    </div>
  )
}

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGoodRank = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const addNeutralRank = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const addBadRank = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={addGoodRank} text="Good" />
      <Button handleClick={addNeutralRank} text="Neutral" />
      <Button handleClick={addBadRank} text="Bad" />
      <h1>Statistics</h1>
      <Ratings goodRanks={good} neutralRanks={neutral} badRanks={bad} total={total} />
    </div>
  )
}

export default App