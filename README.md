# QA Integration Test Challenge

This is a [Next.js](https://nextjs.org) project designed to assess QA and test automation skills. Your challenge is to implement integration tests using **Cypress** or **Playwright** to reach **60% test coverage** of the application.

## 📋 Overview

The project includes a multi-page application featuring:

- **Todo App** (`/`) - A todo list with add, complete, delete, filter, and clear functionality
- **Tabs Demo** (`/tabs`) - Navigation and tab handling
- **Links Demo** (`/links`) - Valid and broken link validation
- **Advanced Demo** (`/advanced`) - Retry logic, state changes, and table validation

The test suites have multiple **skipped tests** with detailed instructions. Your task is to implement these tests to achieve **60% code coverage**.

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd integration-test-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## 📖 Application Features

### Todo App (Home Page)
- **Add todos**: Type text and click "Add" or press Enter
- **Complete todos**: Check the checkbox to mark as done
- **Delete todos**: Click the ✕ button to remove a todo
- **Filter todos**: Toggle between "All", "Active", and "Completed"
- **Clear completed**: Remove all completed todos at once
- **Active count**: Display remaining active items

### Tabs Demo
- Navigate to a secondary page in a new browser tab
- Test tab handling and new window/tab scenarios

### Links Demo
- Mix of valid internal links and intentionally broken links
- Test link validation and HTTP status codes

### Advanced Demo
- **Reveal hidden menu**: Click button 3 times to unlock a menu
- **Users table**: Display and validate table data
- Test state changes and polling strategies

---

## 🧪 Testing Setup

### Option 1: Cypress

Cypress tests are located in `cypress/e2e/`

#### Run Tests in CLI Mode
```bash
npm run cy:run
```

#### Open Interactive Cypress UI
```bash
npm run cy:open
```

#### Key Features
- **Commands**: See `cypress/support/commands.ts` for custom commands like `cy.addTodo()`
- **Data-testid attributes**: The app includes many `data-testid` attributes for reliable element selection
- **Retry logic**: Built-in retry mechanism for flaky tests

### Option 2: Playwright

Playwright tests are located in `playwright/e2e/`

#### Run All Tests
```bash
npm run pw:test
```

#### Run Tests in UI Mode
```bash
npm run pw:ui
```

#### Key Features
- **Locators**: Use `page.getByTestId()` for element selection
- **Multi-tab support**: Native handling of new tabs and contexts
- **Request API**: Make HTTP requests to validate links and status codes

---

## 📝 Implementing Tests

### Test Structure

Both Cypress and Playwright test suites contain **skipped tests** (marked with `.skip()` or `test.skip()`). Each test includes:

1. **Clear goal** - What should be verified
2. **Detailed steps** - How to implement the test
3. **Hints** - Suggested approach or selectors

### Test Categories

#### 1. Adding Todos
- ✅ Handle whitespace-only input
- ✅ Update active item count

#### 2. Completing Todos
- ✅ Mark completed todos
- ✅ Uncheck and mark as active again

#### 3. Deleting Todos
- ✅ Delete specific todo among multiple items
- ✅ Verify correct item is removed

#### 4. Filtering Todos
- ✅ Highlight selected filter
- ✅ Switch between all three filter states

#### 5. Clear Completed
- ✅ Show/hide button based on completed status

#### 6. Navigation (Tabs)
- ✅ Navigate to second tab page
- ✅ Handle browser back button
- ✅ Handle new tab scenarios (Playwright)

#### 7. Link Validation
- ✅ Verify valid links return 2xx status
- ✅ Identify broken links returning 4xx status
- ✅ Report all broken links together

#### 8. Advanced Features
- ✅ Reveal menu after exactly 3 clicks
- ✅ Update button counter label
- ✅ Implement retry/polling strategies
- ✅ Validate table rows
- ✅ Verify table structure and headers

---

## 📊 Coverage Goals

Your implementation should target **60% code coverage**, which includes:

### Required Tests (Cypress)
- **todo.cy.ts**: 6 tests across 5 test suites
- **advanced.cy.ts**: 8 tests across 4 test suites

**Total Cypress tests to implement: 14 tests**

### Required Tests (Playwright)
- **todo.spec.ts**: 7 tests across 5 test suites
- **advanced.spec.ts**: 11 tests across 4 test suites

**Total Playwright tests to implement: 18 tests**

### Choosing Your Approach

- **Cypress only**: Implement all 14 Cypress tests
- **Playwright only**: Implement all 18 Playwright tests
- **Both**: Implement all 32 tests (full coverage)

---

## 🔍 Key Testing Patterns

### Cypress Custom Commands
```typescript
// Add a todo (custom command already defined)
cy.addTodo("Test task");
```

### Cypress Selectors
```typescript
cy.get("[data-testid=todo-input]");        // Input field
cy.get("[data-testid=add-button]");        // Add button
cy.get("[data-testid=todo-item]");         // Todo items
cy.get("[data-testid=filter-active]");     // Filter buttons
cy.get("[data-testid=clear-completed]");   // Clear button
cy.get("[data-testid=hidden-menu]");       // Hidden menu
```

### Playwright Selectors
```typescript
page.getByTestId("todo-input");            // Input field
page.getByTestId("add-button");            // Add button
page.getByTestId("todo-item");             // Todo items
page.getByTestId("filter-active");         // Filter buttons
page.getByTestId("clear-completed");       // Clear button
page.getByTestId("hidden-menu");           // Hidden menu
```

### Common Assertions

**Cypress**
```typescript
cy.get("[data-testid=todo-list]").should("exist");
cy.get("[data-testid=active-count]").should("contain", "2 items left");
cy.url().should("include", "/tabs/second");
```

**Playwright**
```typescript
await expect(page.getByTestId("todo-list")).toBeVisible();
await expect(page.getByTestId("active-count")).toContainText("2 items left");
expect(page.url()).toContain("/tabs/second");
```

---

## 🎯 Step-by-Step Implementation Guide

### Step 1: Understand the Application
1. Start the dev server: `npm run dev`
2. Visit [http://localhost:3000](http://localhost:3000)
3. Explore all pages and features
4. Open DevTools and inspect elements with `data-testid` attributes

### Step 2: Choose Your Testing Tool
- Review test files: `cypress/e2e/` or `playwright/e2e/`
- Decide: Cypress, Playwright, or both

### Step 3: Review Test Templates
- Open the first test file (e.g., `cypress/e2e/todo.cy.ts`)
- Read the TODO comments and understand the test structure
- Note the available data-testid attributes in the app

### Step 4: Implement Tests One by One
- Start with simple tests (add, complete, delete)
- Progress to complex ones (filtering, table validation)
- Run tests frequently to verify implementation

**Cypress**: `npm run cy:open` (interactive) or `npm run cy:run` (CLI)
**Playwright**: `npm run pw:test` (CLI) or `npm run pw:ui` (UI)

### Step 5: Verify Coverage
After implementing all tests, confirm you've achieved 60%+ coverage by:
- Running all tests successfully
- Checking test counts match requirements

### Step 6: Submit
Ensure all tests pass:
```bash
# For Cypress
npm run cy:run

# For Playwright
npm run pw:test

# Or both
npm run cy:run && npm run pw:test
```

---

## 💡 Testing Tips

### Cypress Tips
- Use `cy.addTodo()` custom command for common operations
- Use `.within()` to scope queries to specific elements
- Use `.each()` to iterate over multiple elements
- Test data-testid attributes for reliability (avoid brittle selectors)

### Playwright Tips
- Use `page.getByTestId()` for robust element selection
- Use `page.context()` for multi-tab scenarios
- Use `page.request` for HTTP validation
- Use `.filter()` with locators for sophisticated queries

### General Best Practices
- Start with the simplest assertion first
- Add comments explaining the test scenario
- Use descriptive test names
- Keep tests focused and independent
- Avoid hard-coded waits; use proper waits/retries

---

## 📚 Learning Resources

### Cypress Documentation
- [Cypress Getting Started](https://docs.cypress.io/guides/getting-started/writing-your-first-test)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Commands](https://docs.cypress.io/api/table-of-contents)

### Playwright Documentation
- [Playwright Getting Started](https://playwright.dev/docs/intro)
- [Playwright Locators](https://playwright.dev/docs/locators)
- [Playwright Multi-tab Testing](https://playwright.dev/docs/pages#pages-and-contexts)

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs) - Understanding the app structure
- [Next.js Testing](https://nextjs.org/docs/testing) - General testing guidance

---

## ✅ Success Criteria

Your implementation is complete when:

- ✅ All non-skipped tests pass
- ✅ At least 60% of code coverage is achieved
- ✅ Tests are well-organized and use proper selectors
- ✅ Code follows the existing test patterns
- ✅ All features are validated (add, complete, delete, filter, etc.)

---

## 📞 Support

If you encounter issues:
1. Check the detailed test instructions in the `.cy.ts` or `.spec.ts` files
2. Refer to the documentation links above
3. Inspect the app in browser DevTools
4. Review existing test patterns for guidance
