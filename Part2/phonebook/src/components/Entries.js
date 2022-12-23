const Entries = ({ persons, searchQuery }) => {
    // Filter out entries based on the search query
    const entriesToShow = persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
  
    return (
      <div>
        {entriesToShow.map(person => <p key={person.name}>{person.name}: {person.number}</p>)}
      </div>
    )
}

export default Entries