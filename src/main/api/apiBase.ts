import axios from 'axios'

export const apiBase = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})