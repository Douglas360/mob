import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
require('dotenv')
import * as dotenv from 'dotenv'
import http from "http"
import path from "path"
import { Server } from "socket.io"

import { router } from './routes'
dotenv.config()




const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "..", "public")))



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

const serverHttp = http.createServer(app)

const io = new Server(serverHttp)

export { serverHttp, io }