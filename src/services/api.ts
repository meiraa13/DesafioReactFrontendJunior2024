import axios from "axios";


export const api = axios.create({
    baseURL:"https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos",
    timeout:5000
})