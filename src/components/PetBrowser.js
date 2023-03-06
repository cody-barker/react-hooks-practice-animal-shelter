import React from "react";
import Pet from "./Pet";

function PetBrowser({onAdoptPet, pets}) {

  const petComps = pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>)

  return <div className="ui cards">{petComps}</div>;
}

export default PetBrowser;
