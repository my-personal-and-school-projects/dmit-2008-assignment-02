const puppeteer = require('puppeteer');

(async () => {
  const SCREENSHOT_NAME = `ci-screenshot.png`
  // Launch a headless browser
  const browser = await puppeteer.launch();
  // Open a new page
  const page = await browser.newPage();
  
  try {
    // Navigate to the webpage you want to screenshot
    await page.goto('http://127.0.0.1:3000/');
    // Set the viewport to a specific size
    await page.setViewport({ width: 1280, height: 800 });
    // Take a screenshot of the page
    await page.screenshot({ path: SCREENSHOT_NAME });
    console.log(`Screenshot saved as ${SCREENSHOT_NAME}`);
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();
