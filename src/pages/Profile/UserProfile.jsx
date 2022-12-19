import { Header } from "../../components/LayoutComponents/Header"
import { SideBar } from "../../components/LayoutComponents/SideBar"
import { AuthContext } from "../../contexts/auth"
import { useContext } from "react"
import { Box, TextField, Typography } from "@mui/material"
import { Loading } from "../../components/LayoutComponents/Loading"

import Button from '@mui/material/Button';
import { useState } from "react"





export function UserProfile() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            id_usuario,
            name,
            email,
            password
        }
        console.log(phone)
        updateUser(data)
    }

    const { updateUser, user, loadUpdate } = useContext(AuthContext)

    const id_usuario = Number(user.id_usuario)


    return (


        <div className="min-h-full text-white">
            <Header />

            <div className="flex">
                <SideBar />

                <div className="w-3/4 h-96 m-2 bg-slate-900 rounded-md p-2 items-center text-center">

                    <Typography variant="h5">Dados da Minha Conta</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                        <TextField className="w-3/4 bg-slate-300" defaultValue={user.name} value={name} size="small" onChange={(e) => setName(e.target.value)} />
                        <TextField className="w-3/4 bg-slate-300" defaultValue={user.email} value={email} size="small" onChange={(e) => setEmail(e.target.value)} />
                        <TextField className="w-3/4 bg-slate-300 mb-4" size="small" placeholder="99- 9999-9999" onChange={(e) => setPhone(e.target.value)} />
                        <br /><br />
                        <TextField className="w-3/4 bg-slate-300 mb-4" size="small" label="Atualizar Senha" variant="outlined" type='password' onChange={(e) => setPassword(e.target.value)} />
                        <br /><br />
                        <Button variant="contained" type="submit">Salvar</Button>
                        {loadUpdate &&
                            <Loading />}
                    </Box>





                </div>

            </div>


        </div >


    )
}