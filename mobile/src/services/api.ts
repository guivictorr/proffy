import axios from 'axios';

const api = axios.create({
  baseURL: 'http://YOUR_EXPO_IP:4444'
})

export default api