// src/Formulaire.jsx
import React, { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");

  const handleClick = () => {
    alert(`Bonjour, ${nom} !`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
