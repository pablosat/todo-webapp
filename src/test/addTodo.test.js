import puppeteer from "puppeteer";
import { addToDo } from "./addToDo";

let page;
let browser;
beforeAll(async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      // headless: false
    });
  }

  page = await browser.newPage();
});

describe("End to end tests with puppeter", () => {
  test("should add a new ToDo named 'Study react'", async () => {
    await page.goto("http://localhost:3000/");

    await page.waitForTimeout(100);

    const toDoName = "Study react";

    await addToDo(page, toDoName);

    const querySelector = `span[data-testid="toDoText-${toDoName}"]`;
    const actual = await page.$eval(querySelector, (e) => e.innerText);
    expect(actual).toBe(toDoName);
    await page.close();
  });
  test("should complete the first ToDo", async () => {
    page = await browser.newPage();

    await page.goto("http://localhost:3000/");

    const expected = "item completed";
    const mainToDo = "Study node";
    await page.waitForTimeout(100);

    await addToDo(page, "Study react");
    await page.waitForTimeout(100);

    await addToDo(page, mainToDo);
    await page.waitForTimeout(100);

    const completeQuerySelector = `svg[data-testid="complete-${mainToDo}"]`;
    console.log({ completeQuerySelector });
    await page.click(completeQuerySelector);
    await page.waitForTimeout(100);
    const todoItemQuerySelector = `div[data-testid="toDoItem-${mainToDo}"]`;
    const actual = await page.$eval(todoItemQuerySelector, (el) => el.className);
    expect(actual).toBe(expected);
  });
});

afterAll(async () => {
  // await browser.close();
});
// const querySelector = `svg[data-testid="edit-${mainToDo}"]`;
