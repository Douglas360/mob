import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
const nodemailer = require("nodemailer");
import { sign } from 'jsonwebtoken'
import moment = require('moment');

interface UserRequest {

    name: string
    email: string
    password: string
}

interface UserUpdate {
    id: number
    name: string
    email: string
    password: string
}

interface Send {
    email: string
}

class CreateUserService {

    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email is required")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email_usuario: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exist")
        }

        const passwordHash = await hash(password, 8)



        const user = await prismaClient.user.create({
            data: {
                nm_usuario: name,
                email_usuario: email,
                password: passwordHash,
                validate: new Date(moment().add(30, 'days').calendar())
            },
            select: {
                id_usuario: true,
                email_usuario: true
            }
        })

        /*     const tokenEmail = sign(
                 {
                     id_usuario: user.id_usuario,
                     email_usuario: user.email_usuario
                 },//process.env.JWT_SECRET
                 'k@',
                 {
                     expiresIn: '1d'
                 })
     
             const url = `https://supertips.com.br/confirmation/${tokenEmail}`
     
              let transporter = nodemailer.createTransport({
                  host: "smtp.umbler.com",
                  port: 587,
                  secure: false, // true for 465, false for other ports
                  auth: {
                      user: 'contato@supertips.com.br', // generated ethereal user
                      pass: 'a12345@@' // generated ethereal password
                  },
              });
      
              await transporter.sendMail({
                  from: '"Super Tips" <contato@supertips.com.br>', // sender address
                  to: email, // list of receivers
                  subject: "Ative sua conta", // Subject line
                  html: `Confirme no link para ativar sua conta: <a href="${url}">Aqui</a>`,
                  text: `Clique no link para ativar sua conta: <a href="${url}">Aqui</a>`
              });
     */

        return user
    }

    async update({ email }: Send) {


        const verifyEmail = await prismaClient.user.update({
            where: {
                email_usuario: email
            },
            data: {
                verificado: 1
            }
        }

        )

        return verifyEmail


    }

    async updateUser({ id, name, email, password }: UserUpdate) {
        let date_update = new Date();
        const passwordHash = await hash(password, 8)
        const updateUser = await prismaClient.user.update({
            where: {
                id_usuario: id
            },
            data: {
                nm_usuario: name,
                email_usuario: email,
                password: passwordHash,
                dt_atualizacao: date_update
            }
        })

        return updateUser

    }

    async sendEmailConfirmation({ email }: Send) {
        const tokenEmail = sign(
            {

                email_usuario: email
            },process.env.JWT_SECRET!,
            //'k@',
            {
                expiresIn: '1h'
            })

        const url = `https://supertips.com.br/confirmation/${tokenEmail}`

        let transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'contato@supertips.com.br', // generated ethereal user
                pass: 'a12345@@' // generated ethereal password
            },
        });

        await transporter.sendMail({
            from: '"Super Tips" <contato@supertips.com.br>', // sender address
            to: email, // list of receivers
            subject: "Ative sua conta", // Subject line
            html: `Confirme no link para ativar sua conta: <a href="${url}">Aqui</a>`,
            text: `Clique no link para ativar sua conta: <a href="${url}">Aqui</a>`
        });

    }

}

export { CreateUserService }