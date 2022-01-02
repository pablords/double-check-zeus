import 'dotenv/config'
import { Browser, Page } from 'puppeteer'

export class ExtractFactory {
    private readonly browser: Promise<Browser>
    constructor(browser: Promise<Browser>) {
        this.browser = browser
    }

    async main() {
        const page = await (await this.browser).newPage()
        await this.handleAuth(page)
        await this.handleClickOnCheckBox(page)
        await this.handleDowload(page)
        await this.handleClose()
        return true
    }

    async handleAuth(page: Page) {
        const { MATRICULA, SENHA, MATRICULA_ALTERNATIVA, SENHA_ALTERNATIVA, URL } = process.env
        await page.goto(URL);
        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.type('#username', MATRICULA);
        await page.type('#password', SENHA);
        await page.click('button[type="submit"]');
        console.log('Login 1 vez')
        await new Promise(resolve => setTimeout(resolve, 5000));

        const erro = await page.evaluate(() => document.querySelector<HTMLInputElement>("#second-step-container > div.oj-flex.oj-sm-flex-wrap-nowrap.oj-sm-flex-items-initial.oj-sm-align-items-center.two-field-form__notification-block > div.oj-flex-item.oj-sm-padding-2x-horizontal > span"))

        if (erro?.innerHTML === "Incorrect Instance name, Username or Password") {
            await page.type('#username', MATRICULA_ALTERNATIVA);
            await page.type('#password', SENHA_ALTERNATIVA);
            await page.click('button[type="submit"]');
            console.log('Usuario ou senha incorreta, digitando dados alternativos')
            await new Promise(resolve => setTimeout(resolve, 5000));
        } else if (!(erro?.innerHTML === "Incorrect Instance name, Username or Password")) {
            await page.type('#password', SENHA);
            await page.evaluate(() => document.querySelector<HTMLInputElement>("#delsession")?.click());
            await page.click('button[type="submit"]');
            console.log('Login 2 vez digitando usuario e senha')
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    async handleClickOnCheckBox(page: Page) {

        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.evaluate(() => document.querySelector<HTMLInputElement>("#manage-content > div > div.toa-twopanel-first-panel.toa-twopanel.toa-twopanel-vertical > div.toa-twopanel-title-panel > div > table > tr > td:nth-child(4) > button")?.click());
        console.log('click bottao ver')
        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.click('input[type="checkbox"][name="recursively"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('click checkbox')
        await page.click('button[name="apply"]');
        console.log('click botao aplicar')
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    async handleDowload(page: Page) {
        await (page as any)._client.send('Page.setDownloadBehavior', {
            behavior: 'allow',
            downloadPath: './base',
        })
        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.evaluate(() => document.querySelector<HTMLInputElement>("#manage-content > div > div.toa-twopanel-first-panel.toa-twopanel.toa-twopanel-vertical > div.toa-twopanel-title-panel > div > table > tr > td:nth-child(5) > div > span > button")?.click());
        console.log('click abrir exportar')
        await new Promise(resolve => setTimeout(resolve, 5000));
        await page.evaluate(() => document.querySelector<HTMLInputElement>('[name="export_queue"]')?.click());
        console.log('click exportar')
        await new Promise(resolve => setTimeout(resolve, 20000));
    }

    async handleClose() {
        (await this.browser).close()
        console.log('fechando navegador')
    }

}







