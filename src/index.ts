import express from 'express'
import cors from 'cors'
import { router } from './routes';
import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === "PROD" ? ".env.prod" : process.env.NODE_ENV === "TEST" ? ".env.test" : ".env.dev"
})



const app = express();
app.use(cors())
app.use(express.json());

app.use('/', router);

const { SERVER_HOST, SERVER_PORT, NODE_ENV, PUPPETER_ENV } = process.env;
app.listen(SERVER_PORT, () => {
    console.table([{ ENVIRONMENT: NODE_ENV, PUPPETER_RUNNING: PUPPETER_ENV }]);
    console.log(`Server start in ${SERVER_HOST}:${SERVER_PORT}`);
});




