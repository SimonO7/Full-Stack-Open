import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <p>Good: {props.goodRanks}</p>
      <p>Neutral: {props.neutralRanks}</p>
      <p>Bad: {props.badRanks}</p>
      <p>Total: {props.total}</p>
      <p>Average: {((props.goodRanks * 1) + (props.neutralRanks * 0) + (props.badRanks * -1)) / props.total}</p>
      <p>Positive: {(props.goodRanks / props.total) * 100}%</p>
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
      <Statistics goodRanks={good} neutralRanks={neutral} badRanks={bad} total={total} />
    </div>
  )
}

export default App