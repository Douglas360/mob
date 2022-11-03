import { Request, response, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { ListResultService } from '../../services/Jogo/ListResultService'

class ListResultController {
    async handle_euro(req: Request, res: Response) {
        //verify(req.params.token, 'k@!.PYzB7KvODuEGIeJY!bnFFNvtm;Mx')
        const minuto = req.params.minuto

        const listResultService = new ListResultService()

        const result = await listResultService.execute_euro(minuto)

        return res.json(result)
    }

    async handle_copa(req: Request, res: Response) {

        const listResultService = new ListResultService()

        const result = await listResultService.execute_copa()

        return res.json(result)
    }

    async handle_premier(req: Request, res: Response) {

        const listResultService = new ListResultService()

        const result = await listResultService.execute_premier()

        return res.json(result)
    }

    async handle_super(req: Request, res: Response) {

        const listResultService = new ListResultService()

        const result = await listResultService.execute_super()

        return res.json(result)
    }


}

export { ListResultController }