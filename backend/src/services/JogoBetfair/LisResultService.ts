import { getRedis, setRedis } from '../../middlewares/redisConfig';
import prismaClient from '../../prisma'
import moment = require('moment');

//var date_ob = new Date()


var yesterday = (moment().subtract(1, 'days').add(1, 'hour').format('YYYY-MM-DD HH:04:00'))

var today = moment().format('YYYY-MM-DD 23:59:00')

class ListResultService {

    async execute(minuto: String, id_liga: number) {

        const result = await prismaClient.$queryRaw`
              select top 20 * from t_jogo_betfair 
                  where (id_liga=${id_liga}
                  and minuto_jogo like ${`${minuto}%`} 
                  and dt_atualizacao between ${yesterday} and ${today})
                  /*and dt_atualizacao between '2022-12-06 00:04:00' and '2022-12-7 23:59:59'*/
                  
                  order by id_jogo desc
            
              `

        //  await setRedis(`minuto-${minuto}`, JSON.stringify(result)) // Seta os dados no cache

        return {
            'hora': minuto,
            'items': result
        }

    }

}

export { ListResultService }