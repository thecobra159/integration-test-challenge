describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Adding todos", () => {
    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that a whitespace-only input does NOT add a new todo.
    // Steps:
    //   1. Type only spaces into the input field.
    //   2. The Add button should remain disabled (the app trims whitespace).
    //   3. Assert that no todo items appear in the list.
    // -------------------------------------------------------------------------
    it.skip("should NOT add a todo when the input contains only whitespace", () => {});

    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that the footer active count updates when todos are added.
    // Steps:
    //   1. Add two todos.
    //   2. Assert that [data-testid=active-count] shows "2 items left".
    // -------------------------------------------------------------------------
    it.skip("should update the active items count when a todo is added", () => {});
  });

  describe("Completing todos", () => {
    beforeEach(() => {
      cy.addTodo("Finish report");
    });

    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that unchecking a completed todo marks it as active again.
    // Steps:
    //   1. Check the checkbox of the first todo.
    //   2. Assert it has the class "completed".
    //   3. Uncheck the checkbox.
    //   4. Assert it no longer has the class "completed".
    // -------------------------------------------------------------------------
    it.skip("should uncheck a completed todo and mark it as active again", () => {});
  });

  describe("Deleting todos", () => {
    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that only the correct todo is deleted among multiple items.
    // Steps:
    //   1. Add three todos: "Task 1", "Task 2", "Task 3".
    //   2. Click the delete button of the second todo item (index 1).
    //   3. Assert that exactly 2 todo items remain.
    //   4. Assert that "Task 2" is no longer visible.
    // -------------------------------------------------------------------------
    it.skip("should delete only the selected todo when multiple todos exist", () => {});
  });

  describe("Filtering todos", () => {
    beforeEach(() => {
      cy.addTodo("Active task");
      cy.addTodo("Completed task");
      cy.get("[data-testid=todo-item]")
        .last()
        .find("input[type=checkbox]")
        .check();
    });

    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that the active filter button gets the CSS class "active".
    // Steps:
    //   1. Click the "Active" filter button.
    //   2. Assert [data-testid=filter-active] has the class "active".
    //   3. Assert [data-testid=filter-all] does NOT have the class "active".
    // -------------------------------------------------------------------------
    it.skip("should highlight the selected filter button", () => {});
  });

  describe("Clear completed", () => {
    // -------------------------------------------------------------------------
    // TODO: Implement this test.
    // Goal: verify that "Clear completed" is hidden when no todos are completed.
    // Steps:
    //   1. Add one todo (do NOT complete it).
    //   2. Assert that [data-testid=clear-completed] does not exist in the DOM.
    // -------------------------------------------------------------------------
    it.skip("should NOT show the Clear completed button when no todos are completed", () => {});
  });
});
