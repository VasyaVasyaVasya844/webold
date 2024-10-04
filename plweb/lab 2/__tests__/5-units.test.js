const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 800,
    height: 600,
  },
};

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/5-units.html");
  await page.setViewportSize(settings.viewport);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Item Pricing Template", () => {
  test("Layout should be equal to template", async () => {
    const template = await page.locator("html").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
