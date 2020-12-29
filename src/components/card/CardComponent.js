import React from 'react'
import '../card/card.css'


const CardComponent = ({monster}) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monsterx"/>
            <h1 style={{fontFamily:"Bigelow Rules"}}>{monster.name}</h1>
            <p style={{fontFamily:"Bigelow Rules"}}>{monster.email}</p>  
        </div>
    )
}

export default CardComponent
