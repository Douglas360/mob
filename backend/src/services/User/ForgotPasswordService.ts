const nodemailer = require("nodemailer");
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
const crypto = require("crypto")

interface Email {
    email: string
    password: string


}

class ForgotPasswordService {
    async execute(email: string) {
        const user = await prismaClient.user.findFirst({ where: { email_usuario: email } })

        if (!user) {
            throw new Error("User not found :(");

        }
        try {


            const transporter = nodemailer.createTransport({
                //host: "smtp.umbler.com",
                host:'smtp.umbler.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'contato@supertips.com.br', // generated ethereal user
                    pass: 'a12345@@' // generated ethereal password
                },
            });

            const token = sign(
                {
                    id_usuario: user.id_usuario,
                    email_usuario: user.email_usuario
                },//process.env.JWT_SECRET
                'k@',
                {
                    expiresIn: '1d'
                })

            const url = `https://supertips.com.br/reset_password/${token}`

            const info = await transporter.sendMail({
                from: '"Super Tips" <contato@supertips.com.br>', // sender address
                to: email, // list of receivers
                subject: "Altere sua senha", // Subject line
                html: `Confirme no link para resetar a senha da sua conta: <a href="${url}">Aqui</a>`,
                text: `Confirme no link para resetar a senha da sua conta: <a href="${url}">Aqui</a>`
            });
            return "Email de reset enviado com sucesso para " + email
        } catch (error) {
           console.log(error)
        }

    }

    async resetPassword({ email, password }: Email) {
        try {
            let date_update = new Date();
            const passwordHash = await hash(password, 8)
            const updateUser = await prismaClient.user.update({
                where: {
                    email_usuario: email
                },
                data: {
                    password: passwordHash,
                    dt_atualizacao: date_update
                },
            })

            return updateUser

        } catch (error) {
            console.log(error)
        }


    }
}
export { ForgotPasswordService }