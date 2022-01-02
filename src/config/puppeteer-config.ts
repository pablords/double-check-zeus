
import 'dotenv/config'
import puppeteer from 'puppeteer'


export async function config() {
    const { PUPPETER_ENV } = process.env;
    return await puppeteer.launch({
        defaultViewport: null,
        headless: PUPPETER_ENV === "CONTAINER" ? true : false,
        ignoreHTTPSErrors: true,
        slowMo: 50, // slow down by 250ms
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--start-maximized',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--disable-gpu',
        ]
    });
}



