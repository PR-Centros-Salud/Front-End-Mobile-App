import ApiManager from './ApiManager';
import FormData from 'form-data';
import axios from 'axios';
import {BASE_PATH} from './config';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const loginApi = async (data) => {
    try {
        const url = `${BASE_PATH}/person/login`
        const formData = new FormData()
        formData.append("username", data.username)
        formData.append("password", data.password)
        const response = await axios.post(url, formData)
        console.log(response);
        return response
        
    } catch (e) {
        console.log("error")
        console.log(JSON.stringify(e))
        return null
    }
};