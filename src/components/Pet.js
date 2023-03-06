import React from "react";

function Pet({pet, onAdoptPet}) {

  let genderSign;

  if (pet.gender === "male") {
    genderSign = "♂"
  } else {
    genderSign = "♀"
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
        {genderSign} {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => onAdoptPet(pet)} className="ui primary button">Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
