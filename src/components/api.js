import axios from "axios";

    export const api = axios.create({
        baseURL:"https://api.thedogapi.com",
    });

    export const apiCep = axios.create({
        baseURL:"https://viacep.com.br/ws/",
    });

