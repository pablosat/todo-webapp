import { useReducer } from "react";
import AddToDo from "../AddToDo/AddToDo";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { toDoReducer } from "../toDoReducer";

import "./ToDo.scss";

export const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, toDoReducer());
  console.log(state);
  return (
    <div>
      <AddToDo state={state} dispatch={dispatch} />
      {!!state.length && (
        <div className="listContainer">
          {state.map((todo) => {
            return (
              <ToDoItem
                key={todo.id}
                toDo={todo}
                dispatch={dispatch}
                state={state}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
