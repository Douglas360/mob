import * as dotenv from 'dotenv'
dotenv.config()
import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        //verificar se o email existe
        const user = await prismaClient.user.findFirst({where:{email_usuario:email}})

        if(!user){
            throw new Error("User/Password incorrect");
            
        }

        //verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Password incorrect");
        }

        if(user.status_usuario===1){
            throw new Error("Usuário Inativo")
        }

        let date_update = new Date();
        await prismaClient.user.updateMany({
            where:{
                email_usuario:email
            },
            data:{
                dt_ultimo_login:date_update
            }
        })
            

        const token = sign(
            {
                nm_usuario: user.nm_usuario,
                email_usuario: user.email_usuario
            },process.env.JWT_SECRET,
            {                
                expiresIn: '30d'
            }
           

        )
        
        return {
            id: user.id_usuario,
            name: user.nm_usuario,
            email: user.email_usuario,
            token: token

        }
    }
}export {AuthUserService}