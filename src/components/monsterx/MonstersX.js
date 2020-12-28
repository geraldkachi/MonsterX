import React from 'react'
import axios from "axios";
import CardList from '../cardlist/CardList'
import SearchBox from '../searchbox/SearchBox'

const MonstersX = () => {

    const [monsters, setMonsters] = React.useState([])
    const [searchField, setSeachField] = React.useState('')
    
    React.useEffect(() => {
        hmmmm()
      }, [])

      const hmmmm = async () => {
        axios(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => setMonsters(res.data))
          .catch((err) => console.error(err))
      }

      const onSearchChange  = () => {
        // seachField
      }

      const filteredMonsters = monsters.filter(monster => (
        monster.name.toLowerCase().includes(searchField.toLowerCase)
      ))

    return (
        <div>
            <SearchBox filteredMonsters={filteredMonsters} onSearchChange={onSearchChange} />
            <CardList monsters={monsters} name="LordGearld" />
        </div>
    )
}

export default MonstersX
