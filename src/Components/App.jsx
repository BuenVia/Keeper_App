import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateItem from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    return setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevVals) => {
      return prevVals.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateItem onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.titleEl}
            content={note.contentEl}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
