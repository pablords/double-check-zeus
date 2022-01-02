import 'dotenv/config'
import { Request, Response } from 'express'
import { TransformationFactory } from '../factorys/TransformationFactory'

class TransformationController {
    async handleTransformationData(req: Request, res: Response) {
        try {
            const transformationFactory = new TransformationFactory()
            const filePath: any = await transformationFactory.handleGetDataFromExcel()
            const resultDataFormated = await transformationFactory.handleFormatData(filePath)
            return res.json(resultDataFormated)
        } catch (error) {
            return res.send({ message: "Mistake! contact the admin", error: error })
        }

    }
}

export default new TransformationController()