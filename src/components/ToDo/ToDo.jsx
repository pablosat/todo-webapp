import { useReducer } from "react";
import AddToDo from "../AddToDo/AddToDo";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { toDoReducer } from "../toDoReducer";

export const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, toDoReducer());
  return (
    <div>
      <AddToDo dispatch={dispatch} />
      {!!state.length && (
        <div style={{ marginTop: "40px" }}>
          {state.map((todo) => {
            return <ToDoItem key={todo.id} toDo={todo} dispatch={dispatch} />;
          })}
        </div>
      )}
    </div>
  );
};
