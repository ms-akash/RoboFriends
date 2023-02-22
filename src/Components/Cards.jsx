import React from 'react';
import './Cards.css'

function Cards({id, name, email}) {
    // const [seeds, setSeeds] = useState("");
  return (
    <div className="card">
        <div className="crds">
              <img alt="Robot" src={`https://robohash.org/${id}`} width="200" height="200" />
              <h2>{name}</h2>
              <p>{email}</p>
        </div>
    </div>
  );
}

export default Cards;
