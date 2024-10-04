const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1280,
    height: 1600,
  },
};

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/7-table.html");
  await page.setViewportSize(settings.viewport);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("ToDo Table", () => {
  test("Layout should be equal to template", async () => {
    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
