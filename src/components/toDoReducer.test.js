import {
  addToDo,
  deleteToDo,
  editToDo,
  markToDo,
  toDoReducer
} from "./toDoReducer";

const createToDo = ({
  id = "123",
  name = "dummy todo",
  completed = false
}) => ({ id, name, completed });

describe("todo list reducer", () => {
  it("should initialize the state with an empty array", () => {
    const expected = [];
    const actual = toDoReducer();
    expect(actual).toEqual(expected);
  });

  it("should add a new todo in the state", () => {
    const expected = [createToDo({ name: "test" })];
    const actual = toDoReducer(
      toDoReducer(),
      addToDo({ name: "test", id: "123" })
    );
    expect(actual).toEqual(expected);
  });
  it("should remove the indicated todo from the state", () => {
    const testToDo = {
      name: "test1",
      id: "1"
    };
    const test = createToDo(testToDo);
    const expected = [test];

    const actions = [
      addToDo(testToDo),
      addToDo({
        name: "test2",
        id: "2"
      }),
      deleteToDo({ id: "2" })
    ];
    const actual = actions.reduce(toDoReducer, toDoReducer());
    expect(actual).toEqual(expected);
  });
  it("should mark as completed the indicated todo", () => {
    const expected = [createToDo({ id: "3", completed: true, name: "test" })];
    const actions = [addToDo({ id: "3", name: "test" }), markToDo({ id: "3" })];
    const actual = actions.reduce(toDoReducer, toDoReducer());
    expect(actual).toEqual(expected);
  });
  it("should edit the name of the indicated todo", () => {
    const expected = [createToDo({ id: "3", name: "newName" })];
    const actions = [
      addToDo({ id: "3", name: "test" }),
      editToDo({ id: "3", name: "newName" })
    ];
    const actual = actions.reduce(toDoReducer, toDoReducer());
    expect(actual).toEqual(expected);
  });
});
