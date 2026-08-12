Cypress.Commands.add("addTodo", (text: string) => {
  cy.get("[data-testid=todo-input]").type(text);
  cy.get("[data-testid=add-button]").click();
});

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      addTodo(text: string): Chainable<void>;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */

export {};
