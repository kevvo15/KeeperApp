import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form>
        <input 
          name="title" 
          value={note.title} 
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea 
          name="content" 
          value={note.content} 
          placeholder="Take a note..." 
          rows="3" 
          onChange={handleChange}
        />
        <button className="plus" onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
