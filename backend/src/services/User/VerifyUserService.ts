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

        if (!verifyUser) {
            throw new Error("Error");
        } else if (verifyUser.validate < new Date(today)) {
            //new Date(moment().format('YYYY-MM-DD'))!=null)
            throw new Error("Payment is not found")

        }



        return verifyUser


    }
}
export { VerifyUserService }