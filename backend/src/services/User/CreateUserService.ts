import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UserRequest{
    name:string
    email:string
    password:string
}

class CreateUserService{
    async execute({name, email, password}:UserRequest){
        if(!email ){
            throw new Error("Email is required")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email_usuario:email
            }})

        if (userAlreadyExists){
            throw new Error("User already exist")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{                
                nm_usuario:name,
                email_usuario:email,
                password:passwordHash                                     
            },
            select:{
                id_usuario:true,
                email_usuario:true
            }
        })


        
        return user
    }


}

export {CreateUserService}