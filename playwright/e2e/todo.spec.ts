import { test, expect, Page } from "@playwright/test";

async function addTodo(page: Page, text: string): Promise<void> {
  await page.getByTestId("todo-input").fill(text);
  await page.getByTestId("add-button").click();
}

test.describe("Adding todos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that a whitespace-only input does NOT add a new todo.
  // Steps:
  //   1. Fill the input with only spaces.
  //   2. Assert the Add button is still disabled (the app trims whitespace).
  //   3. Assert that no todo items appear in the list.
  // -------------------------------------------------------------------------
  test.skip("should NOT add a todo when the input contains only whitespace", async ({
    page,
  }) => {});

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that the footer active count updates when todos are added.
  // Steps:
  //   1. Add two todos.
  //   2. Assert that [data-testid=active-count] has text "2 items left".
  // -------------------------------------------------------------------------
  test.skip("should update the active items count when a todo is added", async ({
    page,
  }) => {});
});

test.describe("Completing todos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await addTodo(page, "Finish report");
  });

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that unchecking a completed todo marks it as active again.
  // Steps:
  //   1. Check the checkbox of the first todo.
  //   2. Assert it has the class "completed".
  //   3. Uncheck the checkbox.
  //   4. Assert the "completed" class is removed.
  // -------------------------------------------------------------------------
  test.skip("should uncheck a completed todo and mark it as active again", async ({
    page,
  }) => {});
});

test.describe("Deleting todos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that only the correct todo is deleted among multiple items.
  // Steps:
  //   1. Add three todos: "Task 1", "Task 2", "Task 3".
  //   2. Click the delete button of the second todo item (index 1).
  //   3. Assert that exactly 2 todo items remain.
  //   4. Assert that "Task 2" is no longer in the DOM.
  // -------------------------------------------------------------------------
  test.skip("should delete only the selected todo when multiple todos exist", async ({
    page,
  }) => {});
});

test.describe("Filtering todos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await addTodo(page, "Active task");
    await addTodo(page, "Completed task");
    await page
      .getByTestId("todo-item")
      .last()
      .locator("input[type=checkbox]")
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
  test.skip("should highlight the selected filter button", async ({
    page,
  }) => {});

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that switching filters updates the visible todo list correctly.
  // Steps:
  //   1. Click "Completed" filter -> assert 1 item shown.
  //   2. Click "All" filter       -> assert 2 items shown.
  //   3. Click "Active" filter    -> assert 1 item shown.
  // -------------------------------------------------------------------------
  test.skip("should correctly switch between all three filter states", async ({
    page,
  }) => {});
});

test.describe("Clear completed", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // -------------------------------------------------------------------------
  // TODO: Implement this test.
  // Goal: verify that "Clear completed" is hidden when no todos are completed.
  // Steps:
  //   1. Add one todo (do NOT complete it).
  //   2. Assert that [data-testid=clear-completed] is not visible (or not in the DOM).
  // -------------------------------------------------------------------------
  test.skip("should NOT show the Clear completed button when no todos are completed", async ({
    page,
  }) => {});
});
