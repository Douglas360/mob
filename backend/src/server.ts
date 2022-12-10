import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
require('dotenv')
import * as dotenv from 'dotenv'
import { router } from './routes'
dotenv.config()

const stripe = require('stripe')('sk_test_51MCsigDXO8lGdsO055v4StRAuJvuMloJpnbrzPBdPNz7Mx310tglUPwtKFY8ugG8CDfe25BSZGvE7d5xk4QO5UKc00P6hktfdt');
const YOUR_DOMAIN = 'http://localhost:3001/';

const app = express()

app.use(express.json())
//app.use(express.static('public'));//<=

const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(cors(corsOptions))

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