import { puppeteer } from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://pablo-todo-app.netlify.app/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
