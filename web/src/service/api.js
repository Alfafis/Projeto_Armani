import axios from 'axios';

const api = axios.create({
   baseURL: `${process.env.API_ROTA_URL}`
})

export default api;