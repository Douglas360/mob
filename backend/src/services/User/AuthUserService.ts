import * as dotenv from 'dotenv'
dotenv.config()
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import moment = require('moment');


interface AuthRequest {
    email: string;
    password: string
}


class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //verificar se o email existe
        const user = await prismaClient.user.findFirst({ where: { email_usuario: email } })

        if (!user) {
            throw new Error("User/Password incorrect");

        }

        //verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Password incorrect");
        }

        if (user.status_usuario === 0) {
            throw new Error("UsuárioInativo")

        }

        if (user?.validate < new Date(moment().format('YYYY-MM-DD'))!) {
            throw new Error("UsuárioExpirado")

        }

        if (user.verificado === 0) {
            throw new Error("Usuário Não verificado")

        }

        let date_update = new Date();
        await prismaClient.user.updateMany({
            where: {
                email_usuario: email
            },
            data: {
                dt_ultimo_login: date_update
            }
        })


        const token = sign(
            {
                nm_usuario: user.nm_usuario,
                email_usuario: user.email_usuario
            },//process.env.JWT_SECRET
            'k@!.PYzB7KvODuEGIeJY!bnFFNvtm;Mx',
            {
                expiresIn: '30d'
            }

        )


        return {
            id_usuario: user.id_usuario,
            name: user.nm_usuario,
            email: user.email_usuario,
            token: token,
            validate: user.validate

        }
    }
} export { AuthUserService }