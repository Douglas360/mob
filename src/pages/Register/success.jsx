import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth"
import { useParams } from "react-router-dom";
import logo from '../../assets/logo.png'




export function SuccessPage() {
    const { email } = useParams()
    const { sendEmail } = useContext(AuthContext)


    useEffect(() => {

        sendEmail(email)
        console.log(email)

    });
    return (

        <main className='h-screen flex flex-col justify-center items-center text-center text-2xl'>
            <img src={logo} alt='Super Tips' width={'25%'} />
            <div className="p-4 gap-4 text-white ">

                <h3>Usuário Cadastrado com sucesso! Acesse seu email para validar sua conta</h3>
                <a href='/' className='hover:text-3xl'>Fazer Login</a>
            </div>



        </main>
    )


}