const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/4-fixed.html");
});

test.describe("Testing the «position fixed» exercise", () => {
  test("The styles of the header element must match the task", async ({
    page,
  }) => {
    const header = page.locator(".fixed-header");

    await expect(header).toHaveCSS("position", "fixed");
    await expect(header).toHaveCSS("top", "0px");
    await expect(header).toHaveCSS("height", "100px");
    await expect(header).toHaveCSS("width", "1280px");
  });

  test("The styles of the padding-header element must match the task", async ({
    page,
  }) => {
    const header = page.locator(".padding-header");

    await expect(header).toHaveCSS("padding-top", "100px");
  });
});
