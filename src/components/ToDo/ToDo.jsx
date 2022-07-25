import { useReducer } from "react";
import AddToDo from "../AddToDo/AddToDo";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { toDoReducer } from "../toDoReducer";


export const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, toDoReducer());
  console.log(state);
  return (
    <div>
      <AddToDo toDoList={state} dispatch={dispatch} />
      {!!state.length && (
        <>
          {state.map((todo) => {
            return (
              <ToDoItem
                key={todo.id}
                toDo={todo}
                dispatch={dispatch}
                toDoList={state}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
