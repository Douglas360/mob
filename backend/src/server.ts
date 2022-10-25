import { serverHttp} from "./http"
import "./websocket"


serverHttp.listen(3001,() =>{
    console.log("Rodando na porta 3001")
})