import { getRedis, setRedis } from '../../middlewares/redisConfig';
import prismaClient from '../../prisma'


var date_ob = new Date()

var day = date_ob.getDate()
var dayL = date_ob.getDate() - 1

var month = date_ob.getMonth() + 1
var year = date_ob.getFullYear();
var hour = date_ob.getHours()+1
var yesterday = `${year}-${month}-${dayL} ${hour}:04:00`
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
                  /*and dt_atualizacao between ${yesterday} and ${today})*/
                  and dt_atualizacao between '2022-11-30 19:04:00' and '2022-12-1 23:59:59')
                  
                  order by id_jogo desc
            
              `


        //  await setRedis(`minuto-${minuto}`, JSON.stringify(result)) // Seta os dados no cache
        //console.log(yesterday)
        return result



    }

}

export { ListResultService }