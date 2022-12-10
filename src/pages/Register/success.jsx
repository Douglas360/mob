import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth"
import { useParams } from "react-router-dom";




export function SuccessPage() {
    const { email } = useParams()
    const { sendEmail } = useContext(AuthContext)


    useEffect(() => {

       sendEmail(email)
       
    });
    useNavigate('/')
   // alert('Parabens! Acesse seu email para Ativar sua conta')
  
    //return <div>{email}</div>


}