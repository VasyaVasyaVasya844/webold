const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 600,
    height: 700,
  },
};

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/11-overflow.html");
  await page.setViewportSize(settings.viewport);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Component «Notification»", () => {
  test.describe.configure({ mode: "serial" });

  test("Layout should be equal to template", async () => {
    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test("Layout should be scrollable", async () => {
    await page.evaluate(() => {
      const element = document.querySelector(".notifications");
      element.scrollTop = element.offsetHeight;
    });

    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
