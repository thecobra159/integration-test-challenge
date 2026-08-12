import { test, expect, Page } from "@playwright/test";

test.describe("1. Multiple Tabs", () => {
  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: click the link and interact with the newly opened tab.
  // Steps:
  //   1. Go to "/tabs".
  //   2. Capture the new tab that opens when [data-testid=open-new-tab] is clicked.
  //   3. Assert the new tab's URL contains "/tabs/second".
  //   4. Assert [data-testid=second-tab-heading] is visible on the new tab.
  //   5. Assert the original tab's URL still contains "/tabs" (not "/tabs/second").
  // ---------------------------------------------------------------------------
  test.skip("should open a new tab and interact with it", async ({
    page,
    context,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that the new tab can be closed and the original tab is unaffected.
  // Steps:
  //   1. Go to "/tabs".
  //   2. Open the new tab.
  //   3. Assert the new tab heading is visible.
  //   4. Close the new tab.
  //   5. Assert the original page is still on "/tabs".
  //   6. Assert [data-testid=open-new-tab] is still visible on the original page.
  // ---------------------------------------------------------------------------
  test.skip("should close the new tab and return focus to the original tab", async ({
    page,
    context,
  }) => {});
});

test.describe("2. Broken Links", () => {
  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that specific known-valid links return 2xx status codes, and
  //       that the known-broken links return 4xx status codes.
  // Steps:
  //   1. Go to "/links".
  //   2. Get the href attribute of [data-testid=link-home].
  //   3. Check its status.
  //      Assert it is less than 400.
  //   4. Repeat for [data-testid=link-tabs] and [data-testid=link-advanced].
  //   5. Get the href of [data-testid=link-broken-1] and request it.
  //      Assert its status is greater than or equal to 400.
  // ---------------------------------------------------------------------------
  test.skip("should verify valid links return 2xx and broken links return 4xx", async ({
    page,
    request,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: count how many broken links exist on the page and assert the exact number.
  // Steps:
  //   1. Go to "/links".
  //   2. Collect all hrefs elements.
  //   3. Request each URL and count how many return status >= 400.
  //   4. Assert that the broken count equals 2
  //      (the page intentionally has exactly 2 broken links for this exercise).
  // ---------------------------------------------------------------------------
  test.skip("should find exactly 2 broken links on the /links page", async ({
    page,
    request,
  }) => {});
});

test.describe("3. Retry Click Until Menu Is Visible", () => {
  async function clickUntilVisible(
    page: Page,
    buttonSelector: string,
    targetSelector: string,
    maxRetries = 10,
  ): Promise<void> {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const isVisible = await page.locator(targetSelector).isVisible();
      if (isVisible) {
        console.log(`Became visible after ${attempt} click(s)`);
        return;
      }
      await page.locator(buttonSelector).click();
    }
    throw new Error(
      `"${targetSelector}" did not become visible after ${maxRetries} clicks`,
    );
  }

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify the exact click count — the menu must NOT appear before the
  //       3rd click, and MUST appear on the 3rd click.
  // Steps:
  //   1. Go to "/advanced".
  //   2. Click [data-testid=reveal-menu-button] once.
  //      Assert [data-testid=hidden-menu] is NOT visible.
  //   3. Click the button a second time.
  //      Assert [data-testid=hidden-menu] is still NOT visible.
  //   4. Click the button a third time.
  //      Assert [data-testid=hidden-menu] IS visible.
  //   5. Assert the menu contains the text "Menu is now visible!".
  // ---------------------------------------------------------------------------
  test.skip("should show the menu after exactly 3 clicks", async ({
    page,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that the button label updates its counter on each click.
  // Steps:
  //   1. Go to "/advanced".
  //   2. Assert [data-testid=reveal-menu-button] contains text "0/3".
  //   3. Click the button. Assert it contains "1/3".
  //   4. Click again. Assert it contains "2/3".
  //   5. Click again. Assert it contains "3/3".
  //   6. Assert [data-testid=hidden-menu] is now visible.
  // ---------------------------------------------------------------------------
  test.skip("should update the button counter label on each click", async ({
    page,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: implement an alternative polling strategy using a while loop and
  //       page.waitForSelector() instead of the clickUntilVisible helper.
  // Steps:
  //   1. Go to "/advanced".
  //   2. Write a while loop that:
  //      a. Checks if [data-testid=hidden-menu] is visible.
  //      b. If not, clicks [data-testid=reveal-menu-button].
  //      c. Breaks when the menu becomes visible.
  //      d. Has a safeguard to stop after 10 iterations.
  //   3. After the loop, assert [data-testid=hidden-menu] is visible.
  // ---------------------------------------------------------------------------
  test.skip("should use a while loop as an alternative retry strategy", async ({
    page,
  }) => {});
});

test.describe("4. Table Row Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/advanced");
  });

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify John has Admin role by iterating all rows manually with a loop.
  // Steps:
  //   1. Get all rows: page.locator("#users tbody tr").
  //   2. Get the row count with .count().
  //   3. Loop from 0 to rowCount with a for loop.
  //   4. In each iteration, get the Name cell text with .nth(i).locator("td").nth(0).textContent()
  //      and the Role cell text with .nth(1).
  //   5. When name.trim() === "John", assert role.trim() === "Admin" and set found = true.
  //   6. After the loop, assert found is true.
  // ---------------------------------------------------------------------------
  test.skip("should find a row with Name=John and Role=Admin by iterating rows", async ({
    page,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify Mary has the User role using the filter + locator approach.
  // Steps:
  //   1. Find the row that contains a <td> with "Mary" using .filter().
  //   2. Assert exactly one such row exists.
  //   3. Assert the second <td> in that row contains "User".
  // ---------------------------------------------------------------------------
  test.skip("should verify Mary has the User role", async ({ page }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify the table structure — correct row count and column headers.
  // Steps:
  //   1. Assert "#users tbody tr" has count 2.
  //   2. Assert the first <th> in the thead has text "Name".
  //   3. Assert the second <th> in the thead has text "Role".
  // ---------------------------------------------------------------------------
  test.skip("should verify the table has 2 rows and correct column headers", async ({
    page,
  }) => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that NO row exists with a non-existent user (negative test).
  // Steps:
  //   1. Try to find a row that contains a <td> with "Alice" using .filter().
  //   2. Assert the count of matching rows is 0.
  // ---------------------------------------------------------------------------
  test.skip("should confirm that a non-existent user is not in the table", async ({
    page,
  }) => {});
});
