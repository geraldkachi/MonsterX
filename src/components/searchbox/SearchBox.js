import React from 'react'

const SearchBox = ({onSearchChange, filteredMonsters}) => {
    return (
        <input 
        className=""
        type="search" 
        placeholder="search monsters" 
        onChange={onSearchChange}
        />
    )
}

export default SearchBox
