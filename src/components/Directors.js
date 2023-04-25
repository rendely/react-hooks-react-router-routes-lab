import React from "react";
import { directors } from "../data";

function Directors() {
  return <div><h1>Directors Page</h1>
  {directors.map(director => 
    <div key={director.name}>
      <div>
        Name: {director.name}
      </div>    
      <div>
        Movies: 
        <ul>
          {director.movies.map(m => <li key={m}>{m}</li>)}
        </ul>
      </div>
    </div>
    )}
  </div>;
}

export default Directors;
