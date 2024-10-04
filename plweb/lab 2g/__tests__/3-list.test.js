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
  await page.goto("/3-list.html");
  await page.setViewportSize(settings.viewport);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Layout Designer Road Map", () => {
  test.describe("Definition Block Tests", () => {
    test.describe.configure({ mode: "serial" });

    test("Definition block must be in document", async () => {
      const dl = await page.locator("dl");
      const dt = await page.locator("dt");

      await expect(dl).toBeVisible();
      await expect(dt).toHaveCount(2);
    });

    test("Definition block must have class «definitions»", async () => {
      const dl = await page.locator("dl");

      await expect(dl).toHaveAttribute("class", "definitions");
    });

    test("Definition Term must have class definitions-term", async () => {
      const dt = await page.locator("dt").first();

      await expect(dt).toHaveAttribute("class", "definitions-term");
    });
  });

  test("Road Map layout should be equal to template", async () => {
    const template = await page.locator("body").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot("");
  });
});
