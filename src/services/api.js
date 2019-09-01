import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { TOKEN_KEY, onLogout } from './token';
// Este endereço nao funciona no React!
// http://127.0.0.1:3333
const api = axios.create({
  baseURL: 'http://192.168.0.100:3333',
});

// Enviar token no cabecalho de todas as requisições!
api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    if (!token) {
      onLogout();
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {}
  return config;
});

export default api;
