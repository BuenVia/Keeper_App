import React, { useState } from "react";

function CreateNote(props) {
  const [item, setItem] = useState({
    titleEl: "",
    contentEl: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    return setItem((prevVal) => {
      if (name === "title") {
        return {
          titleEl: value,
          contentEl: prevVal.contentEl
        };
      } else if (name === "content") {
        return {
          titleEl: prevVal.titleEl,
          contentEl: value
        };
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();
    props.onAdd(item);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows="3"
          placeholder="Make a note..."
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
