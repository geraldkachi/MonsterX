import React from "react";
import "../cardlist/cardlist.css"
import CardComponent from "../card/CardComponent"

const CardList = ({monsters }) => {

  const cardarray = monsters.length ? (
    monsters.map((monster) => (
      <div key={monster.id}>
        <CardComponent monster={monster} />
      </div>
    ))
  ) : (
    <div style={{fontFamily:"Bigelow Rules", fontSize:50}} className="text-white pl-5">No Cards</div>
  )

  return (
    <div className="text-center">
      <div className="card-list">{cardarray}</div>
    </div>
  );
};

export default CardList;
