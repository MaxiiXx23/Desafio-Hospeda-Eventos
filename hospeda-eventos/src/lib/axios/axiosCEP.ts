import axios from 'axios'

export const axiosCEP = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
})
