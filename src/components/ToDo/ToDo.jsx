import { useReducer } from "react";
import AddToDo from "../AddToDo/AddToDo";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { toDoReducer } from "../toDoReducer";

import "./ToDo.scss";

export const ToDo = () => {
  const [state, dispatch] = useReducer(toDoReducer, toDoReducer());
  console.log(state);
  return (
    <>
      <div>
        <AddToDo state={state} dispatch={dispatch} />
        {!!state.length && (
          <div className="listContainer">
            {state.map((todo) => {
              return <ToDoItem key={todo.id} toDo={todo} dispatch={dispatch} />;
            })}
          </div>
        )}

        <div className="container">
          {state.map((todo) => {
            return (
              <div key={todo.id} className="item">
                <div className="nameColumn">{todo.name}</div>

                <div className="actionsColumn">X</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
