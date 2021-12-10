import  axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-ctd-ecommerce.herokuapp.com/produto"
});

export default api;