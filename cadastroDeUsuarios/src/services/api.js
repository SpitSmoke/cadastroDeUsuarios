import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cadastro-de-usuarios-production.up.railway.app', 
});

export default api;
