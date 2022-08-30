/// <reference types="cypress" />
/* eslint no-undef: 0 */

const addToDo = (name) => {
  cy.get("input[data-testid='todoInput']").type(`${name}{enter}`);
};

const validateExistenceOfToDo = (name, exists = true) => {
  const shouldActionText = exists ? "exist" : "not.exist";
  cy.get(`div[data-testid="toDoItem-${name}"]`).should(shouldActionText);
};

const completeToDo = (name) => {
  cy.get(`svg[data-testid="complete-${name}"]`).click();
};

beforeEach(() => {
  cy.visit("/");
});

describe("To Do CRUD functions", () => {
  it("should add a new ToDo named 'Study react'", () => {
    const toDoName = "Study react";
    addToDo(toDoName);
    validateExistenceOfToDo(toDoName);
  });
  it("should mark as completed the ToDo named 'Study react'", () => {
    const toDoName = "Study react";
    addToDo("Study nodejs");
    addToDo(toDoName);
    completeToDo(toDoName);
    cy.get(`div[data-testid="toDoItem-${toDoName}"]`).should("have.class", "item completed");
  });
  it("should change the name of the 'Study react' ToDo to 'Study js", () => {
    const toDoName = "Study react";
    const newName = "Study js";
    addToDo("Study nodejs");
    addToDo(toDoName);
    cy.get(`svg[data-testid="edit-${toDoName}"]`).type(`{selectAll}{backspace}${newName}{enter}`);
    validateExistenceOfToDo(newName);
  });
  it("should delete the todo named 'Study nodejs'", () => {
    const toDoName = "Study nodejs";
    addToDo("Study react");
    addToDo(toDoName);
    cy.get(`svg[data-testid="delete-${toDoName}"]`).click();
    validateExistenceOfToDo(toDoName, false);
  });
});
