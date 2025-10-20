// src/ListeCourses.js
import React, { useState } from "react";

function ListeCourses() {
  const [article, setArticle] = useState("");
  const [liste, setListe] = useState([]);

  const ajouterArticle = () => {
    if (article.trim() !== "") {
      setListe([...liste, article]);
      setArticle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>

      <ul>
        {liste.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
