import { Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { ForgotPasswordService } from "../../services/User/ForgotPasswordService"

interface JwtPayload {
    email_usuario: string
}

class ForgotPasswordController {
    async handle(req: Request, res: Response) {
        const { email } = req.body


        const forgotPassword = new ForgotPasswordService()

       await forgotPassword.execute(
            email
        )

        return res.send()
    }

    async resetPassword(req: Request, res: Response) {
        try {
            const {  password } = req.body
            const token = req.params.token
            if(!token){
                return res.json("Invalid URL")
            }

             const { email_usuario } = verify(token, 'k@') as JwtPayload
             const email = email_usuario

            const forgotPassword = new ForgotPasswordService()

            await forgotPassword.resetPassword(
                {
                    email,
                    password
                }
            )

            return res.json("Atualizado")
        } catch (error) {
            console.log(error)
        }
    }

}

export { ForgotPasswordController }