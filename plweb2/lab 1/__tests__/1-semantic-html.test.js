const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/1-semantic-html.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Testing the HTML Semantic exercise", () => {
  test("The header element exists", async () => {
    const header = page.locator("header");
    await expect(header).toBeVisible();
  });

  test("The nav element exists inside the header element", async () => {
    const nav = page.locator("header > nav");
    await expect(nav).toBeVisible();
  });

  test("The logo element exists inside the header element", async () => {
    const logo = page.locator("header > img");
    await expect(logo).toBeVisible();
  });

  test("There are 4 links inside the menu", async () => {
    const links = page.locator("header > nav > ul a");
    await expect(links).toHaveCount(4);
  });
});
