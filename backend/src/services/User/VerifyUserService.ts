import prismaClient from "../../prisma"

interface VerifyUser {
    email: string


}
class VerifyUserService {

    async execute({ email }: VerifyUser) {
        try {

            const verifyUser = await prismaClient.user.findFirst({
                where: {
                    email_usuario: email
                }

            })


            return verifyUser
        }
        catch (error) {
            console.log(error)


        }
    }
}
export { VerifyUserService }