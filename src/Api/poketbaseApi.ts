import axios from 'axios';


export const coffeeApi = axios.create({
    baseURL: 'https://cafe-granito-marron-pb.fly.dev'
});