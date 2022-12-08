import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth'
import logo from '../../assets/logo.png'



export function UserConfirmation() {
    const { token } = useParams();

    const { UserConfirmation } = useContext(AuthContext)

    useEffect(() => {
        UserConfirmation(token)
    });

    return (

        <main className='h-screen flex flex-col justify-center items-center text-center text-2xl'>
<img src={logo} alt='Super Tips' width={'25%'} />
            <div className="p-4 gap-4 text-white ">
            
                <h3>Usuário Validado com sucesso</h3>
                <a href='/' className='hover:text-3xl'>Fazer Login</a>
            </div>



        </main>
    )
}