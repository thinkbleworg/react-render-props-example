import "./styles.css";
import React, { useEffect, useState } from "react";

//Notes component JSX can be rendered using caller component
//props.render(argsObject)

const Notes = (props) => {
  const [notesTitle, setNotesTitle] = useState("");
  const [isEditTitle, setIsEditTitle] = useState(false);

  useEffect(() => {
    setNotesTitle(props.title);
  }, [props.title]);

  const editTitle = () => {
    setIsEditTitle(!isEditTitle);
  };

  return (
    <>
      {!isEditTitle ? (
        <h1>{notesTitle}</h1>
      ) : (
        <input
          type="text"
          value={notesTitle}
          onChange={(e) => setNotesTitle(e.target.value)}
        />
      )}
      {props.render({
        editTitle: editTitle,
        isEditTitle: isEditTitle
      })}
    </>
  );
};

// While calling Notes, add the render method
// Buttons and Description is passed to Notes component from render method
// render = {() => ()} ----> Syntax
// render = {(args) => ( JSX using args )}and args can be passed from Notes Component to render method
export default function App() {
  return (
    <div className="App">
      <Notes
        title="Notes 1"
        render={({ editTitle, isEditTitle }) => (
          <>
            {isEditTitle ? (
              <button onClick={editTitle}>Done</button>
            ) : (
              <button onClick={editTitle}>Edit</button>
            )}
            <div>
              <h2>Notes 1 description</h2>
            </div>
          </>
        )}
      />

      <Notes
        title="Notes 2"
        render={() => (
          <div>
            <h2>Notes 2 description</h2>
          </div>
        )}
      />
    </div>
  );
}
