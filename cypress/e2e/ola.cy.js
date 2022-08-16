/// <reference types="cypress" />

describe("Demo site", () => {
  it("loads", () => {
    cy.visit("/");
    const toDoName = "Study react";
    cy.get("input[data-testid=\"todoInput\"]").type(`${toDoName}{enter}`);
    const asd = cy
      .get(`div[data-testid="toDoItem-${toDoName}"]`)
      .first()
      .should("have.text", toDoName);
    console.log({ asd });
  });
});
