const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/4-css-cascade.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Testing the CSS Cascade exercise", () => {
  test("Main section must include 2 headers and 3 sections", async () => {
    const main = page.locator("main");
    const headerLvlOne = main.locator("> h1");
    const headerLvlTwo = main.locator("> h2");
    const sectionCount = await main.locator("> section").count();

    await expect(main).toBeVisible();
    await expect(headerLvlOne).toBeVisible();
    await expect(headerLvlTwo).toBeVisible();
    await expect(sectionCount).toEqual(3);
  });

  test("Each section should have a second-level header", async () => {
    const sections = page.locator("main > section");
    const sectionCount = await sections.count();

    for (let i = 0; i < sectionCount; i += 1) {
      const header = sections.nth(i).locator("> h2");
      await expect(header).toBeVisible();
    }
  });

  test("The styles of the body element must match the task", async () => {
    const body = page.locator("body");

    await expect(body).toHaveCSS("font-size", "18px");
    await expect(body).toHaveCSS("line-height", "27px");
    await expect(body).toHaveCSS("color", "rgb(51, 51, 51)");
  });

  test("The styles of the h1 element must match the task", async () => {
    const header = page.locator("h1");

    await expect(header).toHaveCSS("font-size", "60px");
    await expect(header).toHaveCSS("margin-top", "50px");
    await expect(header).toHaveCSS("margin-bottom", "10px");
    await expect(header).toHaveCSS("text-align", "center");
  });

  test("The styles of the h2 element must match the task", async () => {
    const header = page.locator("main > h2");

    await expect(header).toHaveCSS("font-size", "25px");
    await expect(header).toHaveCSS("margin-top", "0px");
    await expect(header).toHaveCSS("padding-bottom", "30px");
    await expect(header).toHaveCSS("text-align", "center");
  });

  test("The styles of the section element must match the task", async () => {
    const section = page.locator("main > section").first();

    await expect(section).toHaveCSS("margin", "50px 0px");
    await expect(section).toHaveCSS("padding", "0px 50px");
  });

  test("The styles of the h2 element inside the section must match the task", async () => {
    const header = page.locator("main > section > h2").first();

    await expect(header).toHaveCSS("padding", "0px");
    await expect(header).toHaveCSS("border-style", "none");
    await expect(header).toHaveCSS("text-align", "left");
  });

  test("The styles of the li element must match the task", async () => {
    const listItem = page.locator("ul > li").first();

    await expect(listItem).toHaveCSS("margin-bottom", "10px");
  });
});
