import axios from 'axios';

const token = localStorage.getItem('token');

export const api = axios.create({
  //baseURL: 'https://api.supertips.com.br',
  //baseURL: 'http://44.202.22.32:3001',
  baseURL: "http://192.168.1.96:3001",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const Urldomanin = "http://localhost:3001" 
//export const Urldomanin = "https://supertips.com.br"
