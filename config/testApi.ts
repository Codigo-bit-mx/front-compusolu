import axios from 'axios'


const testApi = axios.create({
    baseURL: 'http://192.168.0.8:8080/', 
    headers: {
        "Content-Type": "multipart/form-data"
    }
})


export default testApi