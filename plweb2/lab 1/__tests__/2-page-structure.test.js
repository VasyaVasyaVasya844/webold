const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/2-page-structure.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("layout tests", () => {
  test("The HTML tag must have the lang attribute", async () => {
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "ru");
  });

  test.describe("Testing the head section", async () => {
    test.describe.configure({ mode: "serial" });

    test("head section should be in index.html", async () => {
      const header = page.locator("head");
      await expect(header).not.toBeEmpty();
    });

    test("Title tag should be in head section", async () => {
      await expect(page).toHaveTitle("Моё первое резюме верстальщика");
    });

    test("The section contains the charset meta tag", async () => {
      const charset = page.locator("head > meta[charset]");
      await expect(charset).toHaveAttribute("charset", /^UTF-8$/i);
    });
  });

  test.describe("Testing the body section", async () => {
    test("The section contains header", async () => {
      const header = page.locator("h1");
      await expect(header).toBeVisible();
      await expect(header).not.toBeEmpty();
    });

    test("The section contains two paragraphs", async () => {
      const paragraph = page.locator("p");
      await expect(paragraph).toHaveCount(2);
    });
  });
});
