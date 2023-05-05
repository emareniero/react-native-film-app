import axios from "axios";

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "3f6dde85954e77a6bc373f1c151e1c95",
        language: "es-ES"
    }
});

export default movieDB;





