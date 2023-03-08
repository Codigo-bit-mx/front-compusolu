import axios from 'axios'


const testApi = axios.create({
    baseURL: 'https://back-compusolu-production.up.railway.app', 
    headers: {
        "Content-Type": "multipart/form-data"
    }
})


export default testApi