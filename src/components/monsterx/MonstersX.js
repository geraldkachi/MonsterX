import React from 'react'
import axios from "axios";
import CardList from '../cardlist/CardList'
import SearchBox from '../searchbox/SearchBox'
import '../../App.css'

const MonstersX = () => {

    const [monsters, setMonsters] = React.useState([])
    const [search, setSearchField] = React.useState('')
    
    React.useEffect(() => {
        hmmmm()
      }, [])

      const hmmmm = async () => {
        axios(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => setMonsters(res.data))
          .catch((err) => console.error(err))
      }


      const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(search.toLowerCase())
      })

    return (
        <div className="my-5">
            <h1>MonstersX</h1>
            <SearchBox search={search} setSearchField={setSearchField} /> 
            <CardList monsters={filteredMonsters} />
        </div>
    )
}
// filteredMonsters={filteredMonsters} 

export default MonstersX
