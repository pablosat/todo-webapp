import { useState } from "react";
import { deleteToDo, editToDo, markToDo } from "../toDoReducer";

const cssProperties = (action) => {
  const colorHelper = {
    delete: "#cf344b",
    edit: "#f5df95",
    cancel: "gray",
    submit: "green"
  };

  return {
    display: "inline",
    margin: "6px",
    cursor: "pointer",
    background: colorHelper[action],
    padding: "3px 12px",
    borderRadius: "4px"
  };
};
export const ToDoItem = ({ toDo: { id, name, completed }, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const editDivProps = isEditing
    ? {}
    : {
        onClick: () => {
          setIsEditing(true);
        }
      };
  return (
    <div style={{ margin: "12px 0" }}>
      {isEditing ? (
        <input
          style={{ margin: "0 4px" }}
          type="text"
          value={newName}
          onChange={(a) => setNewName(a.target.value)}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(markToDo({ id }))}
          />
          <span>{name}</span>
          <div
            style={{
              ...cssProperties("delete")
            }}
            onClick={() => dispatch(deleteToDo({ id }))}
          >
            X
          </div>
        </>
      )}
      <div
        style={{
          ...(isEditing ? { display: "inline" } : cssProperties("edit"))
        }}
        {...editDivProps}
      >
        {isEditing ? (
          <>
            <div
              style={{
                ...cssProperties("submit"),
                ...(name === newName || !newName
                  ? {
                      pointerEvents: "none",
                      cursor: "no-drop"
                    }
                  : {})
              }}
              onClick={() => {
                setIsEditing(false);
                dispatch(editToDo({ id, name: newName }));
              }}
            >
              submit
            </div>
            <div
              style={{ ...cssProperties("cancel") }}
              onClick={() => setIsEditing(false)}
            >
              cancel
            </div>
          </>
        ) : (
          <div style={{ ...cssProperties("edit") }}>edit</div>
        )}
      </div>
    </div>
  );
};
