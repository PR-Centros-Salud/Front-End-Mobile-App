import axios from 'axios';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const BASE_PATH = "http://192.168.1.3:8000"
export const EXPIRATION_TIME = 1200
export const JWT_SECRET = "secret"

export const getProvincesApi = async () => {
    try {
        const url = `${BASE_PATH}/config/available-provinces`
        const result = await axios.get(url)
        return result ? result : null
    } catch (e) {
        console.log(e)
        return null
    }
}