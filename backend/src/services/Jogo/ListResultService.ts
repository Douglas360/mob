import { application } from 'express';
import prismaClient from '../../prisma'
const datetime = new Date()
//const day = ("0" + datetime.getDate()).slice(-2);
var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
const date = year + "-" + month + "-" + day;


class ListResultService {
    async execute_euro(minuto) {
        /*  const result = await prismaClient.jogo.findMany({
              take: 20,
              where: {
                  AND: [
                      {
                          id_liga: 1
                      },
                      {
                          minuto_jogo: {
                              startsWith: minuto,
                          }
                      },
                      
                  ]
  
              },
  
              orderBy: {
                  id_jogo: 'desc'
              },
              include: {
                  ligas: true
              },
  
  
          })
          console.log( datetime);*/
      
        
        const result = await prismaClient.$queryRaw`
        select * from t_jogo 
            where (id_liga=1 
            and minuto_jogo like ${`${minuto}%`} 
            and DATEPART(yy, dt_atualizacao) = ${year}
            and DATEPART(mm, dt_atualizacao) = ${month}
            and	datepart(dd, dt_atualizacao)= ${day})
            
            order by id_jogo desc
        
        `
        
        return result
    }

    async execute_copa() {
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where: {
                id_liga: 2
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

    async execute_premier() {
        const result = await prismaClient.jogo.findMany({
            take: 480,
            where: {
                id_liga: 3
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

    async execute_super() {
        const result = await prismaClient.jogo.findMany({
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
        return result
    }
}

export { ListResultService }