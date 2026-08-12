describe("1. Multiple Tabs", () => {
  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: navigate to the second-tab page.
  // Steps:
  //   1. Visit "/tabs".
  //   2. Click the link.
  //   3. Assert that the current URL includes "/tabs/second".
  //   4. Assert that [data-testid=second-tab-heading] is visible and contains
  //      the text "You are on the second tab!".
  // ---------------------------------------------------------------------------
  it.skip("should navigate to the second-tab page", () => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that after navigating to the second tab page, the browser
  //       back button returns the user to the original /tabs page.
  // Steps:
  //   1. Visit "/tabs".
  //   2. Get the link button and click it.
  //   3. Assert the URL is "/tabs/second".
  //   4. Navigate back.
  //   5. Assert the URL is back to "/tabs".
  //   6. Assert [data-testid=open-new-tab] is visible again.
  // ---------------------------------------------------------------------------
  it.skip("should return to the original page when navigating back", () => {});
});

describe("2. Broken Links", () => {
  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: collect ALL broken links first and report them together in one
  //       assertion, instead of failing on the very first broken link.
  // Steps:
  //   1. Visit "/links".
  //   2. Collect all hrefs from "a[href]" elements (skip "#" and "mailto:").
  //   3. For each href, check the HTTP status code.
  //   4. Push any URL with status >= 400 into a "broken" array.
  //   5. After all checks, assert that the broken array has length 0.
  // ---------------------------------------------------------------------------
  it.skip("should report all broken links together without failing on the first one", () => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that only the known valid links return a 2xx status code,
  //       by checking specific data-testid links individually.
  // Steps:
  //   1. Visit "/links".
  //   2. Get the href of [data-testid=link-home] and request it.
  //      Assert the status is less than 400.
  //   3. Repeat for [data-testid=link-tabs] and [data-testid=link-advanced].
  //   4. Get the href of [data-testid=link-broken-1] and request it.
  //      Assert the status is greater than or equal to 400.
  // ---------------------------------------------------------------------------
  it.skip("should individually verify which links are valid and which are broken", () => {});
});

describe("3. Retry Click Until Menu Is Visible", () => {
  function clickUntilVisible(
    buttonSelector: string,
    targetSelector: string,
    maxRetries = 10,
    attempt = 0,
  ): void {
    if (attempt >= maxRetries) {
      throw new Error(
        `"${targetSelector}" did not become visible after ${maxRetries} clicks`,
      );
    }

    cy.get(targetSelector).then(($el) => {
      if ($el.is(":visible")) {
        cy.log(`Element became visible after ${attempt} click(s)`);
      } else {
        cy.get(buttonSelector).click();
        clickUntilVisible(
          buttonSelector,
          targetSelector,
          maxRetries,
          attempt + 1,
        );
      }
    });
  }

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify the exact click count required — the menu must NOT appear
  //       before the 3rd click, and MUST appear on the 3rd click.
  // Steps:
  //   1. Visit "/advanced".
  //   2. Click [data-testid=reveal-menu-button] once.
  //      Assert [data-testid=hidden-menu] does NOT exist yet.
  //   3. Click the button a second time.
  //      Assert [data-testid=hidden-menu] still does NOT exist.
  //   4. Click the button a third time.
  //      Assert [data-testid=hidden-menu] IS visible.
  //   5. Assert the menu contains the text "Menu is now visible!".
  // ---------------------------------------------------------------------------
  it.skip("should show the menu after exactly 3 clicks", () => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that the button label updates its click counter on each click,
  //       confirming the component state is changing correctly.
  // Steps:
  //   1. Visit "/advanced".
  //   2. Assert [data-testid=reveal-menu-button] contains text "0/3".
  //   3. Click the button once. Assert it contains "1/3".
  //   4. Click again. Assert it contains "2/3".
  //   5. Click again. Assert it contains "3/3".
  //   6. Assert [data-testid=hidden-menu] is now visible.
  // ---------------------------------------------------------------------------
  it.skip("should update the button counter label on each click", () => {});
});

describe("4. Table Row Validation", () => {
  beforeEach(() => {
    cy.visit("/advanced");
  });

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify that a row exists where the Name column is "John" AND the
  //       Role column is "Admin", by iterating over all rows manually.
  // Steps:
  //   1. Get all rows.
  //   2. Iterate with each in a loop.
  //   3. For each row, read the text of the first <td> (Name) and second <td> (Role).
  //   4. When you find the row where Name === "John", assert Role === "Admin".
  //   5. Track a "found" boolean and assert it is true after the loop.
  // ---------------------------------------------------------------------------
  it.skip("should find a row with Name=John and Role=Admin by iterating rows", () => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify Mary has the "User" role.
  // Steps:
  //   1. Find the <td> that contains "Mary".
  //   2. Assert its sibling <td> contains the text "User".
  // ---------------------------------------------------------------------------
  it.skip("should verify Mary has the User role", () => {});

  // ---------------------------------------------------------------------------
  // TODO: Implement the test below.
  // Goal: verify the table structure — correct number of rows and correct headers.
  // Steps:
  //   1. Assert "#users tbody tr" has length 2.
  //   2. Assert the first <th> in the thead has text "Name".
  //   3. Assert the second <th> in the thead has text "Role".
  // ---------------------------------------------------------------------------
  it.skip("should verify the table has 2 rows and correct column headers", () => {});
});
