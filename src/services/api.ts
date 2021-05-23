import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/germanolira/minhas-plantas'
});

export default api;