import axios from "axios"

const token = localStorage.getItem('token')

export const api = axios.create({
    baseURL: "http://44.202.22.32:3001",
    //baseURL: "http://localhost:3001",
    headers:{
        Authorization: `Bearer ${token}`
    }
})