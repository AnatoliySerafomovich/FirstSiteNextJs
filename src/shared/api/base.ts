import axios from "axios"
import { APIKEY, APIURL } from "../config"

const apiInstanse = axios.create({
    baseURL:APIURL,
    headers:{
        'Content-Type':'application/json',
        'x-rapidapi-key':APIKEY
    }
})
export default apiInstanse