import { useState } from 'react'

// Render an anecdote
const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>Has {props.votes} votes</p>
    </>
  )
}


// Render a button
const Button = (props) => <button onClick={props.clickAction}>{props.text}</button>


// Main app
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))

  // Add a vote in the votes array for the anecdote in the same array index
  const addVote = (selectedID) => {
    const copyVotes = [...votes]
    copyVotes[selectedID] += 1
    setVotes(copyVotes)
  }

  // Index of the anecdote with the most votes
  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} /> 
      <Button clickAction={() => addVote(selected)} text="Vote" />
      <Button clickAction={() => setSelected(Math.floor(Math.random() * 7))} text="Next anecdote" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={anecdotes[mostVotesIndex]} votes={votes[mostVotesIndex]} />
    </div>
  )
}

export default App