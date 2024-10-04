const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 600,
    height: 400,
  },
};

test.describe("Squares", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/2-absolute.html");
    await page.setViewportSize(settings.viewport);
  });

  test("The layout must match the template", async ({ page }) => {
    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
