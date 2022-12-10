import { Request, Response } from "express"
import { CreateUserService } from "../../services/User/CreateUserService"
import { verify } from 'jsonwebtoken'

interface JwtPayload {
   email_usuario: string
}
class CreateUserController {


    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body

        const createUserService = new CreateUserService()
        const user = await createUserService.execute({
            name,
            email,
            password

        })

        return res.json(user)
    }

    async verifyEmail(req: Request, res: Response) {
        try {
            const { email_usuario } = verify(req.params.token, 'k@') as JwtPayload
            const email = email_usuario
            const createUserService = new CreateUserService()
            await createUserService.update({
                email
            })


            return res.json("Verificado com sucesso")
        } catch (error) {
            return res.json(error)
        }

    }

    async updateUser(req: Request, res: Response) {

        try {
            const { id_usuario, name, email, password } = req.body
            const id = Number(id_usuario)


            const createUserService = new CreateUserService()
            const user = await createUserService.updateUser({
                id,
                name,
                email,
                password

            })

            return res.json("Atualizado com sucesso");


        } catch (error) {
            throw error

        }
    }

    async sendEmail(req: Request, res: Response) {
        try {
            const { email } = req.body
            const createUserService = new CreateUserService()
            const user = await createUserService.sendEmailConfirmation({
                email

            })

            return res.json("Email enviado com sucesso");

        } catch (error) {
            throw error
        }
    }

}

export { CreateUserController }