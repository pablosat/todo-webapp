export const checkIfValid = (toDoList, enteredToDo) =>
  enteredToDo && toDoList.every(({ name }) => name !== enteredToDo);
