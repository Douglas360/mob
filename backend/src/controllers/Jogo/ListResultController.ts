import {Request, response, Response} from 'express'
import {ListResultService} from '../../services/Jogo/ListResultService'

class ListResultController{
    async handle(req: Request, res:Response){

            const listResultService =  new ListResultService()

           const result = await listResultService.execute()

        return res.json(result)
    }
}

export {ListResultController}