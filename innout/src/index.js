const puppeteer = require( "puppeteer');
(async () => {
    const browser = await puppeteer . launch();
    const page = await browser.newPage( );
    await page.goto( "https://github.com/pedroal pacheco ');
    await page.screenshot ( {path: 'meugit .png' })
}();