import React from 'react';
import Bienvenue from './Bienvenue';
import Compteur from './Compteur';
import Formulaire from './Formulaire';
import ListeCourses from './ListeCourses';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Bienvenue nom="Amine" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
    </div>
  );
}

export default App;
