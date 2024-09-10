// src/App.jsx
import React from "react";
import Counter from "./Counter";

function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
