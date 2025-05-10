import axios from "axios";


const baseURL = "https://fakestoreapi.com/"

const httpClient = axios.create({
    baseURL,
})

// httpClient.interceptors.request.use(
//     function(config){
//         return config
//     },
//     function(error){
//         return Promise.reject(error);
//     }
// )

// httpClient.interceptors.response.use(
//     function(response){
//         return response
//     },
//     function(error){
//         return Promise.reject(error)
//     }
// )

export {httpClient}