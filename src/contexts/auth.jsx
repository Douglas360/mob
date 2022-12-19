import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { api } from "../services/api"
import { Urldomanin } from "../services/api"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [loadRegister, setLoadRegister] = useState(true)
    const [loadUpdate, setUpdate] = useState(false)
    const autenticado = !!user;
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const recoveredUser = localStorage.getItem('user')

        const token = localStorage.getItem('token')

        if (recoveredUser && token) {

            setUser(JSON.parse(recoveredUser))
            verifyUser()
            api.defaults.headers['Authorization'] = `Bearer ${token}`


        }

        setLoading(false)

    }, [])

    const checkout = async (name, email) => {
        try {
            const res = await fetch(`${Urldomanin}/create-checkout-session`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',

                },
                body: JSON.stringify({
                    name: name,
                    email: email
                })
            })
            const body = await res.json()


            window.location.href = body.url

        } catch (error) {
            console.log(error)
        }
    }

    const login = async ({ email, password }) => {
        setLoadRegister(false)

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
            setUser(usuariologado)

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

            } if (erro === "UsuárioExpirado") {
                toast.error('Usuário Expirado!', {
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


        try {
            await api.post('create', {
                name,
                email,
                password


            }).then((response) => {
                /* toast.success('Validar Email para acessar o sistema ', {
                     position: "top-center",
                     autoClose: 5000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                 });*/

                checkout(name, email)

                //  navigate("/")
            })
            setLoadRegister(false)

        } catch (error) {

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
            setLoadRegister(false)

        }

    }

    const updateUser = async ({ id_usuario, name, email, password }) => {
        setUpdate(true)
        const newUser = { id_usuario, name, email }
        try {
            await api.post('profile/update', {
                id_usuario,
                name,
                email,
                password


            }).then((response) => {
                localStorage.setItem("user", JSON.stringify(newUser))
                setUpdate(false)
                toast.success('Atualizado com sucesso ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                navigate("/profile")
            })

        } catch (error) {
            setUpdate(false)
            console.log(error)
            toast.error('Erro! Tente novamente', {
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

        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        navigate("/")
    }

    const resetPasswod = async (email) => {

        try {
            console.log(email)
            api.get('forgot', {
                email
            }).then((response) => {
                toast.success('Verifique seu e-mail ', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })

        } catch (error) {
            console.log(error)
            toast.error('Erro! Tente novamente', {
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

    const UserConfirmation = async (token) => {
        try {

            api.get(`/confirmation/${token}`, {


            })
        } catch (error) {
            console.log(error)
            toast.error('Erro! Tente novamente', {
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

    const sendEmail = async (email) => {
        try {

            api.post(`send_email`, {
                email


            })

        } catch (error) {
            console.log(error)
            toast.error('Erro! Tente novamente', {
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

    const verifyUser = async() =>{
        try {
            await api.post('verifyuser')
        } catch (error) {
            console.log("Error verify user")
            logout()
            
        }
    }

    return (

        <AuthContext.Provider value={{
            autenticado, user, login, logout, createUser, updateUser, loadRegister, loadUpdate, loading, resetPasswod, UserConfirmation, sendEmail
        }}>

            {children}
        </AuthContext.Provider>
    )
}


