import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(e) {
    setFilters({type: e.target.value})
  }

  function onFindPetsClick(e) {
    if (filters.type === "all") {
    fetch(`http://localhost:3001/pets`)
    .then(r => r.json())
    .then(list => setPets(list))
    } else {
    fetch(`http://localhost:3001/pets?type=${filters.type}`)
    .then(r => r.json())
    .then(list => setPets(list))
    }
  }

  function onAdoptPet(pet) {
    const updatedPets = pets.map(p => {
      if (p.id === pet.id) {
        p.isAdopted = true
        return p
      } else {
        return p
      }
    })
    setPets(updatedPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


/**
 * App
 *  Filters
 *  PetBrowser
 *    Pet
 */