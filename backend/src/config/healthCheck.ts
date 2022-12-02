import {Request, Response} from 'express'
class HealthCheck{
async handle(req:Request, res:Response){
    return res.json({status: "Ok"}).send(200)

}
}
export {HealthCheck}