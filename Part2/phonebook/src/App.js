import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Handle new input into the name field
  const handleNameEntry = (event) => {
    setNewName(event.target.value)
  }

  // Handle adding entry into the phonebook
  const addEntry = (event) => {
    event.preventDefault()

    // Make an object
    const newEntry = {
      name: newName
    }

    // Check if object with same values already exists in the phonebook
    if (isDuplicateName(newEntry, persons)) {
      return (
        alert(`${newName} is already added to phonebook`)
      )
    }

    // Add entry to the phonebook if it doesn't exist
    setPersons(persons.concat(newEntry))
    setNewName('')
  }

  // Check to see if an object with the same value exists in the given array.
  // Returns true if object with same value already exists in the array, false otherwise.
  const isDuplicateName = (newObject, array) => {
    for (let i = 0; i < array.length; i++) {
      if (JSON.stringify(array[i]) === JSON.stringify(newObject)) {
        return true
      }
    }
    return false
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          Name: <input value={newName} onChange={handleNameEntry} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App