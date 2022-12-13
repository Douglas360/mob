import { Request, Response } from 'express'

import { ListResultService } from '../../services/JogoBet365/ListResultService'

class ListResultController {
    async handle_euro(req: Request, res: Response) {
      
        const minuto = req.params.minuto

        const listResultService = new ListResultService()

        const result = await listResultService.execute(minuto,1)

        return res.json(result)
    }

    async handle_copa(req: Request, res: Response) {
        const minuto = req.params.minuto

        const listResultService = new ListResultService()

        const result = await listResultService.execute(minuto,2)

        return res.json(result)
    }

    async handle_premier(req: Request, res: Response) {
        const minuto = req.params.minuto

        const listResultService = new ListResultService()

        const result = await listResultService.execute(minuto,3)

        return res.json(result)
    }

    async handle_super(req: Request, res: Response) {
        const minuto = req.params.minuto

        const listResultService = new ListResultService()

        const result = await listResultService.execute(minuto,4)

        return res.json(result)
    }

  
}

export { ListResultController }