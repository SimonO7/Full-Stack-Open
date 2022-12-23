import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import Entries from './components/Entries'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Get the persons data from JSON
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {setPersons(response.data)})
  }, [])

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