import { useState } from "react";
import { addToDo } from "../toDoReducer";

import "./AddToDo.scss";
import { checkIfValid } from "./helpers";

const AddToDo = ({ dispatch, state }) => {
  const [toDoName, setToDoName] = useState("");
  const onChangeHandler = (e) => setToDoName(e.target.value);
  const handleAddToDo = (e) => {
    e.preventDefault();
    const isValid = checkIfValid(state, toDoName);
    if (isValid) {
      dispatch(addToDo({ name: toDoName }));
      setToDoName("");
    }
  };
  return (
    <div>
      <input
        className="textInput"
        value={toDoName}
        onChange={onChangeHandler}
        placeholder="What do you need to do?"
      />
      <button disabled={!toDoName} onClick={handleAddToDo}>
        add
      </button>
    </div>
  );
};

export default AddToDo;
