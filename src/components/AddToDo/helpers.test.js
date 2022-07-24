import { checkIfValid } from "./helpers";

describe("add to do helpers", () => {
  it("should return false when the entered toDo has the same name of an existing one", () => {
    const toDoList = [
      { id: "1", name: "study react", completed: false },
      { id: "2", name: "study testing", completed: false }
    ];
    const inputToDo = "study react";
    const actual = checkIfValid(toDoList, inputToDo);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});
