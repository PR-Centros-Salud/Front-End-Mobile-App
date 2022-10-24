import ApiManager from './ApiManager';
import FormData from 'form-data';
import axios from 'axios';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const loginApi = async (data) => {
    try {
        const url = `http://192.168.1.4:8000/person/login`
        const formData = new FormData()
        formData.append("username", data.username)
        formData.append("password", data.password)
        const response = await axios.post(url, formData)
        console.log(response);
        return response
        
    } catch (e) {
        console.log(e)
        return null
    }
};