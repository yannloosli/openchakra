import axios from 'axios'

const API = axios.create({
  baseURL: `${typeof window !== 'undefined' && window.location.href}api`,
  timeout: 120000,
})

export default API
