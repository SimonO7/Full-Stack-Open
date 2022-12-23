const Filter = ({ searchQuery, handleSearchEntry }) => {
    return (
        <div>
        Filter shown with <input value={searchQuery} onChange={handleSearchEntry} />
      </div>
    )
}

export default Filter