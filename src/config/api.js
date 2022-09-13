import axios from 'axios'
const API_URL='https://betterme2022.herokuapp.com/api/v1/cliente'
export default axios.create({
    baseURL: API_URL,
    headers: {
        //'Content-Type': 'application/json'
        ' Access-Control-Allow-Origin': '*'
    }
})