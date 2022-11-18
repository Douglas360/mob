import { getRedis, setRedis } from '../../middlewares/redisConfig';
import prismaClient from '../../prisma'

var date_ob = new Date()

var day = date_ob.getDate()
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();



class ListResultService {

    async execute(minuto: String, id_liga: number) {
        const result = await prismaClient.$queryRaw`
        select top 20 * from t_jogo
        where (id_liga=${id_liga}
        and minuto_jogo like ${`${minuto}%`}
        and dt_atualizacao >= '2022-11-18')

        order by id_jogo desc 
        `

        /*  const result = await prismaClient.$queryRaw`
              select top 20 * from t_jogo 
                  where (id_liga=${id_liga}
                  and minuto_jogo like ${`${minuto}%`} 
                  and dt_atualizacao between '2022-11-16 00:00:00.000' and '11/17/2022 23:59:00.000')
                  
                  order by id_jogo desc
              
              `*/


        await setRedis(`minuto-${minuto}`, JSON.stringify(result)) // Seta os dados no cache

        return result



    }

    async teste() {
        const result = await prismaClient.jogo.findMany({
            take: 60,
            where: {
                id_liga: 1
            },
            orderBy: {
                id_jogo: 'desc'
            },
            include: {
                ligas: true
            },


        })
        return result
    }

    /*  const result = await prismaClient.jogo.findMany({
          take: 480,
          where: {
              id_liga: 4
          },
          orderBy: {
              id_jogo: 'desc'
          },
          include: {
              ligas: true
          },
  
  
      })
      return result*/
}

export { ListResultService }