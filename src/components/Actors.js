import React from "react";
import { actors } from "../data";

function Actors() {
  return <div><h1>Actors Page</h1>
  {actors.map(actor => 
    <div key={actor.name}>
      <div>
        Name: {actor.name}
      </div>    
      <div>
        Movies: 
        <ul>
          {actor.movies.map(m => <li key={m}>{m}</li>)}
        </ul>
      </div>
    </div>
    )}
  </div>;
}

export default Actors;
