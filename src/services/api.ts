import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    (response=> response),
    (err => {
        console.error(err);
        return Promise.reject(err);
    })
)

export default api;