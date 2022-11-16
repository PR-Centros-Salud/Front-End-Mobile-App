import FormData from 'form-data';
import axios from 'axios';
import {BASE_PATH} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const getMeApi = async (logout) => { 
    try {
        const url = `${BASE_PATH}/person/me`
        const result = await authFetch(url, { method: "GET" }, logout)
        return result ? result : null 
    } catch (e) { 
        console.log(e)
        return null
    }
}

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


export const authFetch = async (url, params) => {
    const token = await AsyncStorage.getItem('AccessToken');
    if (!token) {
        return null
    }
    else {
        console.log(token, 'aaa')
        const paramsTemp = {
            data: params.body,
            headers: {
                ...params?.headers,
                Authorization: `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*"
            },
            method: params.method ? params.method : "GET",
        }
        try {
            // If the token is not expired, we will make the request
            const response = await axios(url, paramsTemp)
            return response
        } catch (e) {
            console.log(e.response, 'error')
            return e.response
        }
    }
}

export const changePasswordApi = async (old_password, new_password) => {
    try {
        const url = `${BASE_PATH}/person/update-password`
        const formData = new FormData()
        formData.append("old_password", old_password.trim())
        formData.append("new_password", new_password.trim())
        
        const params = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                old_password,
                new_password,
            }
        }
        const result = await authFetch(url, params)
        return result ? result : null
    } catch (e) {
        console.log(e)
        return null
    }

}