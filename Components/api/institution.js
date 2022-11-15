import FormData from 'form-data';
import axios from 'axios';
import {BASE_PATH} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authFetch} from './user_api'

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const getInstitutionByProvinceApi = async () => { 
    try {
        const url = `${BASE_PATH}/institution/province/`;
        const params = {
            method: "GET"
        }
        const response = await authFetch(url, params);
        return response;
    } catch (e) { 
        console.log(e)
        return e
    }
}

export const getInstitituionLaboratoriesApi = async (id) => {
    try {
        const url = `${BASE_PATH}/institution/laboratoryservices/${id}`;
        const params = {
            method: "GET"
        }
        const response = await authFetch(url, params);
        return response;
    } catch (e) {
        console.log(e)
        return e
    }
}