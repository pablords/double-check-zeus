import 'dotenv/config';
import { config } from '../config/puppeteer-config'
import { ExtractFactory } from '../factorys/ExtractFactory'
import { Request, Response } from 'express'



class ExtractController {
    async handleExtractData(req: Request, res: Response) {
        try {
            const scrapingFactory = new ExtractFactory(config())
            const result = await scrapingFactory.main()
            if (result) return res.send({ message: "extraction complete" })
        } catch (error) {
            return res.send({ message: "Mistake! contact the admin", error: error })
        }

    }
}

export default new ExtractController()