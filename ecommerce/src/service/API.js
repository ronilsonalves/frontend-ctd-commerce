import  axios from 'axios';

const api = axios.create({
    baseURL: "http://aplicacaobackend-env.eba-3tnqkcc8.us-east-1.elasticbeanstalk.com/produto"
});

export default api;