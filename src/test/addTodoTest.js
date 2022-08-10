const  puppeteer = require("puppeteer");

(async () => {
  console.log(puppeteer)
  const browser = await puppeteer.launch(
    // {headless: false}
    );
  

  const page = await browser.newPage();
  
  
  
  await page.goto("http://localhost:3000/");
  await page.$eval('input', el => el.value = 'study react');
  await page.keyboard.press("Enter")

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
