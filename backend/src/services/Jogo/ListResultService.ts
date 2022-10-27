import prismaClient from '../../prisma'

class ListResultService{
    async execute_euro(){
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where:{
                id_liga:1
            },
            orderBy:{
                id_jogo:'desc'
            },
            include:{
                ligas:true
            },
            
            
        })
        return result
    }

    async execute_copa(){
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where:{
                id_liga:2
            },
            orderBy:{
                id_jogo:'desc'
            },
            include:{
                ligas:true
            },
            
            
        })
        return result
    }

    async execute_premier(){
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where:{
                id_liga:3
            },
            orderBy:{
                id_jogo:'desc'
            },
            include:{
                ligas:true
            },
            
            
        })
        return result
    }

    async execute_super(){
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where:{
                id_liga:4
            },
            orderBy:{
                id_jogo:'desc'
            },
            include:{
                ligas:true
            },
            
            
        })
        return result
    }
}

export {ListResultService}