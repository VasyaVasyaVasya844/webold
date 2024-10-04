const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1400,
    height: 900,
  },
};

test.describe("Educational Programme Layout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/1-relative.html");
    await page.setViewportSize(settings.viewport);
  });

  test("Layout should be equal to template", async ({ page }) => {
    const template = await page.locator("html").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test("Layout should be equal to template after hover", async ({ page }) => {
    await page.locator(".card").first().hover();
    await page.waitForTimeout(800);

    const template = await page.locator("html").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
