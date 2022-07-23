import { useState } from "react";
import { addToDo } from "../toDoReducer";

const AddToDo = ({ dispatch }) => {
  const [toDoName, setToDoName] = useState("");
  return (
    <div>
      Add to do:
      <input
        style={{ margin: "0 4px" }}
        type="text"
        value={toDoName}
        onChange={(a) => setToDoName(a.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToDo({ name: toDoName }));
          setToDoName("");
        }}
      >
        add
      </button>
    </div>
  );
};

export default AddToDo;
