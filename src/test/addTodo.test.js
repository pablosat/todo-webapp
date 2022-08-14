import puppeteer from"puppeteer";

let page;
let browser;
beforeAll(async () => {
  browser = await puppeteer.launch(
     {headless: false}
  );   
  
  page = await browser.newPage();
   
  await page.goto("http://localhost:3000/");
});

describe('End to end tests with puppeter', () => {
  test('should add a new ToDo named "Study react"', async () => {
    const expected = "Study react"
    await page.keyboard.type(expected)
    await page.keyboard.press("Enter")
        // console.log(1,`span[data-testid="${expected}"]`)
    await page.waitForTimeout(4000)

    const querySelector= `#asd`
    // console.log(2,querySelector) 
    const actual = await page.$("div");
    console.log({actual})
    await page.screenshot({ path: "add.png" });
    expect(actual).toBe(expected);
  });
  test('should complete the first ToDo', async () => {
    const expected = "item completed"
    await page.keyboard.type("Study react")
    await page.keyboard.press("Enter")
    await page.keyboard.type("Study node")
    await page.keyboard.press("Enter")
    await page.click("svg")
    const actual = await page.$$eval('div', el => {
      console.log(444,el)
      return el[4].className});
      console.log({actual})
    await page.screenshot({ path: "complete.png" });
    expect(actual).toBe(expected);
  });
});

afterAll(async () => {
  
  // await browser.close();

});