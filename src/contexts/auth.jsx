import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { api } from "../services/api"


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const [carregando, setCarregando] = useState(false)

    useEffect(() => {

        const recoveredUser = localStorage.getItem('user')

        const token = localStorage.getItem('token')

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
            localStorage.setItem("token", token, {
                path: "/"
            })


        }

        setCarregando(true)
    }, [])


    const login = async ({ email, password }) => {

        try {
            const response = await api.post('session', {
                email,
                password
            })


            const usuariologado = response.data
            const token = response.data.token


            localStorage.setItem("user", JSON.stringify(usuariologado))
            localStorage.setItem("token", token, {
                path: "/"
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}` //Passando token para todas as requisições

            //console.log(usuariologado["name"])
            setUser({ usuariologado })

            toast.success('Logado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/dashboard")




        } catch (error) {

            const erro = error.response.data.eror
            if (erro === "Usuário Não verificado") {
                toast.error('Usuário não verificado!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            } if (erro === "User/Password incorrect") {
                toast.error('Usuário não encontrado ou Senha incorreta!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            } if (erro === "Password incorrect") {
                toast.error('Usuário não encontrado ou Senha incorreta!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            } if (erro === "UsuárioInativo") {
                toast.error('Usuário inativo!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            }
            console.log(erro)

        }




    }

    const createUser = async ({ name, email, password }) => {
        setLoad(false)

        try {
            await api.post('create', {
                name,
                email,
                password


            }).then((response) => {
                toast.success('Validar Email para acessar o sistema ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                navigate("/")
            })

            setLoad(false)
        } catch (error) {
            setLoad(false)
            console.log(error)
            toast.error('Usuario já Cadastrado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }

    const logout = () => {
        api.defaults.headers.Authorization = null
        console.log("Logout")
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        navigate("/")
    }

    return (

        <AuthContext.Provider value={{
            autenticado:
                !!user, user, login, logout, createUser, carregando, load
        }}>

            {children}
        </AuthContext.Provider>
    )
}


