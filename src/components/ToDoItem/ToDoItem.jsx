import { useState } from "react";
import { deleteToDo, editToDo, markToDo } from "../toDoReducer";

import "./ToDoItem.scss";

export const ToDoItem = ({ toDo: { id, name, completed }, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const handleEdit = () => setIsEditing(!isEditing);
  const canSubmit = name !== newName && !!newName;
  const handleSubmit = () => {
    if (canSubmit) {
      setIsEditing(false);
      dispatch(editToDo({ id, name: newName }));
    }
  };

  const onChangeCheckbox = () => dispatch(markToDo({ id }));
  const handleDelete = () => dispatch(deleteToDo({ id }));
  const onChangeEditInput = (e) => setNewName(e.target.value);
  const submitClassNameToUse = [
    "button",
    "submit",
    ...(!canSubmit ? ["disable"] : [])
  ].join(" ");

  return (
    <div className="itemContainer">
      {isEditing ? (
        <>
          <input
            className="editInput"
            type="text"
            value={newName}
            onChange={onChangeEditInput}
          />
          <div className={submitClassNameToUse} onClick={handleSubmit}>
            submit
          </div>
          <div className="button" onClick={handleEdit}>
            cancel
          </div>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={onChangeCheckbox}
          />
          <span>{name}</span>
          <div className="button delete" onClick={handleDelete}>
            X
          </div>
          <div className="button edit" onClick={handleEdit}>
            edit
          </div>
        </>
      )}
    </div>
  );
};
