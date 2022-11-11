import { BASE_PATH } from "./config"
import FormData from "form-data"
import axios from "axios"

axios.defaults.headers["Access-Control-Allow-Origin"] = "*"

export const createClientApi = async (values) => {
    try{
        const url = `${BASE_PATH}/client/create`
        values.first_name = values.first_name.trim()
        values.last_name = values.last_name.trim()
        values.second_last_name = values.second_last_name ? values.second_last_name.trim() : null
        values.email =values.email.trim()
        values.phone = values.phone.trim()
        values.identity_card = values.identity_card.trim()
        values.address = values.address.trim()
        values.username = values.username.trim()
        values.password = values.password.trim()

        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            data: values
        }
        const response = await axios(url, params)
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
        return e.response
    }
}