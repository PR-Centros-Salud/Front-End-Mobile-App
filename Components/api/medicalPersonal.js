import FormData from 'form-data';
import axios from 'axios';
import {BASE_PATH} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authFetch} from './user_api'

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const getMedicalPersonalByProvinceApi = async () => {
    try {
        const url = `${BASE_PATH}/medicalPersonal/province/`;
        const params = {
            method: 'GET',
        }
        const result = await authFetch(url, params);
        return result;
    } catch (error) {
        console.log(error);
        return e;
    }
}

export const getMedicalPersonalByIdApi = async (id) => {
    try {
        const url = `${BASE_PATH}/medicalPersonal/get/${id}`;
        const params = {
            method: 'GET',
        }
        const result = await authFetch(url, params);
        return result;
    } catch (error) {
        console.log(error);
        return e;
    }
}

