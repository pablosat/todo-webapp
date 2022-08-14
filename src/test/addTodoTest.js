const  puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch(
    {headless: false}
    );
  

  const page = await browser.newPage();
  
  
  
  await page.goto("http://localhost:3000/");
  const expected = "item completed"
  await page.keyboard.type("Study react")
  await page.keyboard.press("Enter")
  await page.keyboard.type("Study node")
  await page.keyboard.press("Enter")
  const actual2 = await page.$("span");
  await page.click("svg")
    console.log({actual2})
  const actual = await page.$$eval('div', el => {
    console.log(4444,el)
    return el[4].className});
    console.log({actual})
  await page.screenshot({ path: "complete.png" });

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
