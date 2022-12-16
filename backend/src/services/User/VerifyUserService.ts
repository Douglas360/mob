import prismaClient from "../../prisma"
import moment from 'moment';

const today = (moment().format("YYYY-MM-DD"))

interface VerifyUser {
    email: string


}
class VerifyUserService {

    async execute({ email }: VerifyUser) {


        const verifyUser = await prismaClient.user.findFirst({
            where: {
                email_usuario: email
            }

        })

        if (verifyUser.validate < new Date(moment().format('YYYY-MM-DD'))) {
            //new Date(moment().format('YYYY-MM-DD'))!=null)
            throw new Error("UsuárioExpirado")

        }



        return verifyUser


    }
}
export { VerifyUserService }