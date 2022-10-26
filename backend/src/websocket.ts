import { io } from "./http";
import sql, { columns, rows } from "mssql"
const connectionsArray = []
const POLLING_INTERVAL = 3000


const dbConfig = {
    user: "sa",
    password: "Suporte*13",
    server: "xbigdata.cvvtqgy2croi.us-east-1.rds.amazonaws.com",
    database: "bet365-api",
    encrypt: true,
    trustServerCertificate: true
}

const cp = new sql.ConnectionPool(dbConfig)
cp.connect(err => {
    if (err)
        console.log("DB Error: " + err)
})


io.on('connection', function (socket) {
    socket.on('echo', function (data) {
        console.log(data);
    })

    

    const request = new sql.Request(cp);
   
    const statement =
        "select top 10 * from t_jogo order by id_jogo desc";
    request.stream = true;
    request.query(statement);

    request.on('recordset', columns => {
        // Emitted once for each recordset in a query

    })

    request.on('row', row => {

        socket.emit("row", row);
        console.log(row)

    })

    request.on('error', err => {

    })
    request.on('done', result => {


    })

});



