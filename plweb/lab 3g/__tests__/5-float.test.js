const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1000,
    height: 500,
  },
};

test.describe("Float Layout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/5-float.html");
    await page.setViewportSize(settings.viewport);
  });

  test("The layout must match the template", async ({ page }) => {
    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
