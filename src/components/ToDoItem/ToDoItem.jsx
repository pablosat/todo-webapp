import { useEffect, useRef, useState } from "react";
import {
  FaCheck,
  FaRegCheckCircle,
  FaRegCircle,
  FaRegEdit,
  FaRegTimesCircle,
  FaRegTrashAlt
} from "react-icons/fa";
import { checkIfValid } from "../AddToDo/helpers";
import { deleteToDo, editToDo, markToDo } from "../toDoReducer";

import "./ToDoItem.scss";

export const ToDoItem = ({
  toDo: { id, name, completed },
  dispatch,
  toDoList
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const inputRef = useRef(null);

  const handleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  const canSubmit = name !== newName && !!newName;

  const handleSubmit = () => {
    const isValid = checkIfValid(toDoList, newName);
    if (canSubmit && isValid) {
      setIsEditing(false);
      dispatch(editToDo({ id, name: newName }));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
    if (event.key === "Escape") {
      handleEdit();
    }
  };

  const onChangeCheckbox = () => dispatch(markToDo({ id }));
  const handleDelete = () => dispatch(deleteToDo({ id }));
  const onChangeEditInput = (e) => setNewName(e.target.value);

  const itemClassName = completed ? "item completed" : "item";

  const Checkbox = () => (completed ? <FaRegCheckCircle /> : <FaRegCircle />);

  const submitClass = canSubmit ? "button" : "button disabled";

  return (
    <div className={itemClassName}>
      <div className="nameColumn">
        {isEditing ? (
            <input
              className="editInput"
              type="text"
              value={newName}
              onChange={onChangeEditInput}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />
        ) : (
          <>
            <span className="button" onClick={onChangeCheckbox}>
              <Checkbox />
            </span>
            <span className="textName">
              {name}
            </span>
          </>
        )}
      </div>

      <div className="actionsColumn">
        {isEditing ? (
          <>
            <FaCheck onClick={handleSubmit} className={submitClass} />
            <FaRegTimesCircle onClick={handleEdit} className="button" />
          </>
        ) : (
          <>
            {!completed && (
              <FaRegEdit onClick={handleEdit} className="button" />
            )}
            <FaRegTrashAlt onClick={handleDelete} className="button" />
          </>
        )}
      </div>
    </div>
  );
};
