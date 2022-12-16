import { Request, Response } from "express"
import { VerifyUserService } from "../../services/User/VerifyUserService"
class VerifyUserController {
    async handle(req: Request, res: Response) {

       
            const { email } = req.body


            const verifyUserService = new VerifyUserService()
            const verifyUser = await verifyUserService.execute({
                email

            })

            return res.json(verifyUser)

       
    }

}
export { VerifyUserController }