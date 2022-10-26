import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
require('dotenv')
import * as dotenv from 'dotenv'
import { router } from './routes'
dotenv.config()

const app = express()

app.use(express.json())


app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            eror: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'

    })
})


app.listen(3001, () => {
    console.log("Rodando na porta 3001")
})