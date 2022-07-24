export const checkIfValid = (toDoList, enteredToDo) =>
  toDoList.every(({ name }) => name !== enteredToDo);
