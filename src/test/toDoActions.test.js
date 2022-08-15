import puppeteer from "puppeteer";
import { addToDo, editToDo } from "./toDoActions";

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

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

afterEach(async () => {
  await page.close();
});

describe("End to end tests with puppeter", () => {
  test("should add a new ToDo named 'Study react'", async () => {
    await page.waitForTimeout(50);

    const toDoName = "Study react";

    await addToDo(page, toDoName);

    const querySelector = `span[data-testid="toDoText-${toDoName}"]`;
    const actual = await page.$eval(querySelector, (e) => e.innerText);
    expect(actual).toBe(toDoName);
  });
  test("should complete the second ToDo", async () => {
    const expected = "item completed";
    const mainToDo = "Study node";
    await page.waitForTimeout(50);

    await addToDo(page, "Study react");
    await page.waitForTimeout(50);

    await addToDo(page, mainToDo);
    await page.waitForTimeout(50);

    const completeQuerySelector = `svg[data-testid="complete-${mainToDo}"]`;
    await page.click(completeQuerySelector);
    await page.waitForTimeout(50);
    const todoItemQuerySelector = `div[data-testid="toDoItem-${mainToDo}"]`;
    const actual = await page.$eval(todoItemQuerySelector, (el) => el.className);
    expect(actual).toBe(expected);
  });

  test("should complete the first ToDo", async () => {
    const expected = "item completed";
    const mainToDo = "Study node";
    await page.waitForTimeout(50);

    await addToDo(page, "Study react");
    await page.waitForTimeout(50);

    await addToDo(page, mainToDo);
    await page.waitForTimeout(50);

    const completeQuerySelector = `svg[data-testid="complete-${mainToDo}"]`;
    await page.click(completeQuerySelector);
    await page.waitForTimeout(50);
    const todoItemQuerySelector = `div[data-testid="toDoItem-${mainToDo}"]`;
    const actual = await page.$eval(todoItemQuerySelector, (el) => el.className);
    expect(actual).toBe(expected);
  });
  test("should edit the first ToDo", async () => {
    const expected = "Study react";
    const oldName = "Study node";
    await page.waitForTimeout(50);

    await addToDo(page, oldName);
    await page.waitForTimeout(50);
    await editToDo(page, oldName, expected);

    await page.waitForTimeout(50);
    const todoItemQuerySelector = `span[data-testid="toDoText-${expected}"]`;
    const actual = await page.$eval(todoItemQuerySelector, (el) => el.innerText);
    expect(actual).toBe(expected);
  });
});

afterAll(async () => {
  await browser.close();
});
