import { useState } from 'react'

// Render button
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>


// Render statistics
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.goodRanks} />
        <StatisticLine text="Neutral" value={props.neutralRanks} />
        <StatisticLine text="Bad" value={props.badRanks} />
        <StatisticLine text="Total" value={props.total} />
        <StatisticLine text="Average" value={((props.goodRanks * 1) + (props.badRanks * -1)) / props.total} />
        <StatisticLine text="Positive" value={String((props.goodRanks / props.total) * 100)+" %"} />
      </tbody>
    </table>
  )
}


// Render a statistic line
const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  ) 
}


// Main app
const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // Increment the good ranking and update total
  const addGoodRank = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  // Increment the neutral ranking and update total
  const addNeutralRank = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  // Increment the bad ranking and update total
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