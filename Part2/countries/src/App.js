import { useState, useEffect } from 'react'
import axios from 'axios'

const Results = ({countries, searchQuery}) => {
    const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div>
            {countriesToShow.map(country => <p key={country.name.common}>{country.name.common}</p>)}
        </div>
    )
}

const App = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [countries, setCountries] = useState([])

    const handleSearchQuery = (event) => {
        console.log(event)
        setSearchQuery(event.target.value)
    }

    //Get the countries from the API
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(response => {
            setCountries(response.data)
        })
    }, [])

    return (
       <div>
            <div>Find countries <input value={searchQuery} onChange={handleSearchQuery}></input></div>
            <Results countries={countries} searchQuery={searchQuery} />
       </div> 
    )
    
}
export default App