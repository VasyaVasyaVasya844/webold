const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/6-z-index.html");
});

test.describe("Testing the «z-index» exercise", () => {
  test("The styles of the circle element must match the task", async ({
    page,
  }) => {
    const header = page.locator(".circle").first();

    await expect(header).toHaveCSS("position", "absolute");
  });

  test("The styles of the circle-red element must match the task", async ({
    page,
  }) => {
    const header = page.locator(".circle-red");

    await expect(header).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect(header).toHaveCSS("z-index", "2");
    await expect(header).toHaveCSS("opacity", "0.5");
  });

  test("The styles of the circle-blue element must match the task", async ({
    page,
  }) => {
    const header = page.locator(".circle-blue");

    await expect(header).toHaveCSS("background-color", "rgb(0, 0, 255)");
    await expect(header).toHaveCSS("z-index", "1");
  });
});
