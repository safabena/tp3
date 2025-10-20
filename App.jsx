// src/App.jsx
import React from "react";
import Bienvenue from "./Bienvenue";
import Compteur from "./Compteur";
import Formulaire from "./Formulaire";
import ListeCourses from "./ListeCourses";
function App() {
  return (
    <div>
      <Bienvenue nom="Amina" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
    </div>
  );
}

export default App;


