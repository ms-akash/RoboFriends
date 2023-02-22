import React from 'react';
import Cards from './Cards';
import './CardList.css';

const CardList = ({robots}) => {
  return (
      <div className="CardList">
          {robots.map((user, i) => { return <Cards key = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />; })}
      </div>
    
  );
}

export default CardList;
