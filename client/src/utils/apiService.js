// filepath: /c:/Users/USUARIO/ArquitecturaSoftware/ProyectoU2/client/src/utils/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

export default api;