import { useState } from 'react'

const Filter = ({ searchQuery, handleSearchEntry }) => {
  return (
    <div>
      Filter shown with <input value={searchQuery} onChange={handleSearchEntry} />
    </div>
  )
}
  
const AddPersonForm = (props) => {
  return (
    <form onSubmit={props.formSubmitAction}>
      <div>
        Name: <input value={props.newName} onChange={props.handleNameEntry} />
      </div>
      <div>
        Number: <input value={props.newNumber} onChange={props.handleNumberEntry} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

const Entries = ({ persons, searchQuery }) => {
  // Filter out entries based on the search query
  const entriesToShow = persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      {entriesToShow.map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '0123-2345-6789'
    },
    {
      name: 'Pomu Rainpuff',
      number: '1800-POMU'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Handle new input into the name field
  const handleNameEntry = (event) => {
    setNewName(event.target.value)
  }

  // Handle new input into number field
  const handleNumberEntry = (event) => {
    setNewNumber(event.target.value)
  }

  // Handle new input into the search field
  const handleSearchEntry = (event) => {
    setSearchQuery(event.target.value)
  }

  // Handle adding entry into the phonebook
  const addEntry = (event) => {
    event.preventDefault()

    // Make an new entry object
    const newEntry = {
      name: newName,
      number: newNumber
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
    setNewNumber('')
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
      <h1>Phonebook</h1>
      <Filter searchQuery={searchQuery} handleSearchEntry={handleSearchEntry}/>
      <h2>Add new entry</h2>
      <AddPersonForm formSubmitAction={addEntry} newName={newName} newNumber={newNumber} handleNameEntry={handleNameEntry} handleNumberEntry={handleNumberEntry} />
      <h2>Numbers</h2>
      <Entries persons={persons} searchQuery={searchQuery} />
    </div>
  )
}

export default App