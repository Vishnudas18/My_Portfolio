const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto('https://user-ecommerce.netlify.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '../src/assets/cartilotte.png' });
  await browser.close();
})();
