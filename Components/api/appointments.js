import FormData from 'form-data';
import axios from 'axios';
import {BASE_PATH} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authFetch} from './user_api'

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const getAvailableMedTimesApi = async (id, date) => { 
    try {
        const url = `${BASE_PATH}/medappointments/available-times/${id}?date_time=${date}`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        console.log(error);
        return null;
    }

}

export const getAvailableLabTimesApi = async (id, date) => {
    try {
        const url = `${BASE_PATH}/labappointments/available-times/${id}?date_time=${date}`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        console.log(error);
        return null;
    }

}

export const labAppointmentCreateApi = async (data) => {
    try {
        const url = `${BASE_PATH}/labappointments/create`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        const response = await authFetch(url, params);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const medAppointmentCreateApi = async (data) => { 
    try {
        const url = `${BASE_PATH}/medappointments/create`;
        const params = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        const response = await authFetch(url, params);
        return response;
    } catch (error) {
        return error;
    }
}

export const getPastLabAppointmentsApi = async () => {
    try {
        const url = `${BASE_PATH}/labappointments/client?q=2`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}

export const getPastMedAppointmentsApi = async () => {
    try {
        const url = `${BASE_PATH}/medappointments/client?q=2`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}

export const getFutureLabAppointmentsApi = async () => { 
    try {
        const url = `${BASE_PATH}/labappointments/client?q=1`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}

export const getFutureMedAppointmentsApi = async () => {
    try {
        const url = `${BASE_PATH}/medappointments/client?q=1`;
        const params = {
            method: 'GET',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}

export const cancelLabAppointmentApi = async (id) => {
    try {
        const url = `${BASE_PATH}/labappointments/cancel/${id}`;
        const params = {
            method: 'PATCH',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}

export const cancelMedAppointmentApi = async (id) => {
    try {
        const url = `${BASE_PATH}/medappointments/cancel/${id}`;
        const params = {
            method: 'PATCH',
        }
        const response = await authFetch(url, params);
        return response;
    }
    catch (error) {
        return error;
    }
}