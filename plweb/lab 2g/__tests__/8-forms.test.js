const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/8-forms.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Feedback Form Template", () => {
  test("Form layout should be equal to template", async () => {
    const template = await page.locator("form").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
