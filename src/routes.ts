import 'dotenv/config'
import express, { Response, Request } from 'express';
import ExtractController from './controllers/ExtractController';
import TransformationController from './controllers/TransformationController'
import { apiVersion } from '../package.json'

export const router = express.Router();
const { NODE_ENV } = process.env
const baseUrl = NODE_ENV === "PROD" || NODE_ENV === "TEST" ? `/api/${apiVersion}` : ""

router.get(baseUrl, (request: Request, response: Response) => response.send({ message: 'zeus-service is running' }))

router.get(`${baseUrl}/extract-data`, ExtractController.handleExtractData)
router.get(`${baseUrl}/transformation-data`, TransformationController.handleTransformationData)

