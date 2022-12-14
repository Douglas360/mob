import { Request, Response } from "express"
import { VerifyUserService } from "../../services/User/VerifyUserService"
class VerifyUserController {
    async handle(req: Request, res: Response) {

        try {
            const {email} = req.body
            console.log(email)
            


            const verifyUserService = new VerifyUserService()
            const verifyUser = verifyUserService.execute({
                email

            })
           

            return res.json(verifyUser)

        } catch (error) {
            res.json(error)

        }
    }

}
export { VerifyUserController }