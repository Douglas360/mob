import { getRedis, setRedis } from '../../middlewares/redisConfig';
import prismaClient from '../../prisma'


var date_ob = new Date()

var day = date_ob.getDate()
var dayL = date_ob.getDate() - 1

var month = date_ob.getMonth() + 1
var year = date_ob.getFullYear();
var yesterday = `${year}-${month}-${dayL} 00:00:00`
var today = `${year}-${month}-${day} 23:59:00`



//var today = moment().format('YYYY-MM-DD h:m:s')
class ListResultService {

    async execute(minuto: String, id_liga: number) {
        /*  const result = await prismaClient.$queryRaw`
          select top 20 * from t_jogo
          where (id_liga=${id_liga}
          and minuto_jogo like ${`${minuto}%`}
          and dt_atualizacao >='2022-11-25')
  
          order by id_jogo desc 
          `*/

        const result = await prismaClient.$queryRaw`
              select top 20 * from t_jogo 
                  where (id_liga=${id_liga}
                  and minuto_jogo like ${`${minuto}%`} 
                  and dt_atualizacao between ${yesterday} and ${today})
                  
                  order by id_jogo desc
            
              `


        //  await setRedis(`minuto-${minuto}`, JSON.stringify(result)) // Seta os dados no cache
        console.log(today)
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