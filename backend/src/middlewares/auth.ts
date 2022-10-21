import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
const authConfig = require('../config/auth')
interface Payload{
    sub: string
}

export function auth(
    req: Request,
    res: Response,
    next: NextFunction
){
    //receber o token
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({ error: 'Token was not provided' }).end()

    } 

    
    const[, token] = authToken.split(" ")

    //validar token
    try {
        const {sub} =  verify(
            token, 
            //process.env.JWT_SECRET
            authConfig.secret
            
        ) as Payload

        //REcuperar o id do token e colocar em uma variavel req.id_user
        //req.user_id = sub

        return next()

    } catch (error) {
        return res.status(401).json({ ERROR: "Invalid Token" }).end()        
    }
}