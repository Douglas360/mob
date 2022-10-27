import {Request, response, Response} from 'express'
import {ListResultService} from '../../services/Jogo/ListResultService'

class ListResultController{
    async handle_euro(req: Request, res:Response){

            const listResultService =  new ListResultService()

           const result = await listResultService.execute_euro()

        return res.json(result)
    }

    async handle_copa(req: Request, res:Response){

        const listResultService =  new ListResultService()

       const result = await listResultService.execute_copa()

    return res.json(result)
}

async handle_premier(req: Request, res:Response){

    const listResultService =  new ListResultService()

   const result = await listResultService.execute_premier()

return res.json(result)
}

async handle_super(req: Request, res:Response){

    const listResultService =  new ListResultService()

   const result = await listResultService.execute_super()

return res.json(result)
}

    
}

export {ListResultController}