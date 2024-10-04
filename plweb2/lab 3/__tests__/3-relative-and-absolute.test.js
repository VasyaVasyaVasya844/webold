const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/3-relative-and-absolute.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Testing the «position relative and absolute exercise", () => {
  test("The styles of the books-card element must match the task", async () => {
    const header = page.locator(".books-card");

    await expect(header).toHaveCSS("position", "relative");
  });

  test("The styles of the book-description element must match the task", async () => {
    const header = page.locator(".book-description");

    await expect(header).toHaveCSS("position", "absolute");
    await expect(header).toHaveCSS("top", "0px");
    await expect(header).toHaveCSS("bottom", "0px");
    await expect(header).toHaveCSS("right", "0px");
    await expect(header).toHaveCSS("width", "250px");
  });
});
