import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/?name=",
});

export default api;