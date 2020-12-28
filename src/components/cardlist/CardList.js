import React from "react";
import "../cardlist/cardlist.css"

const CardList = ({ children, monsters }) => {

  const cardarray = monsters.length ? (
    monsters.map((monster) => (
      <div key={monster.id}>
        <span>{monster.name}</span>
      </div>
    ))
  ) : (
    <div>No Cards</div>
  );

  return (
    <div name="Lord Kachi" className="text-center">
      <div className="card-list">{cardarray}</div>
    </div>
  );
};

export default CardList;
