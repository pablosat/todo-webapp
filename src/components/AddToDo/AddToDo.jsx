import { useEffect, useRef, useState } from "react";
import { addToDo } from "../toDoReducer";

import "./AddToDo.scss";
import { checkIfValid } from "./helpers";

const AddToDo = ({ dispatch, state }) => {
  const [toDoName, setToDoName] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const isValid = checkIfValid(state, toDoName);
      if (isValid) {
        dispatch(addToDo({ name: toDoName }));
        setToDoName("");
      }
    }
  };

  const onChangeHandler = (e) => setToDoName(e.target.value);

  return (
    <div className="inputContainer">
      <input
        className="textInput"
        value={toDoName}
        onChange={onChangeHandler}
        placeholder="What you have to do?"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default AddToDo;
