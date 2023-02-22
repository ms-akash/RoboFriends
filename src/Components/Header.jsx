import React from 'react';
import'./Header.css';

function Header({searchChange}) {
  return (
    <div className="header">
        <input type="search" placeholder="Search" onChange={searchChange}/>
    </div>
  );
}

export default Header;
