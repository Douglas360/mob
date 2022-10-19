import prismaClient from '../../prisma'

class ListResultService{
    async execute(){
        const result = await prismaClient.jogo.findMany({
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