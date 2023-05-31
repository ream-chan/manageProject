import { actionTypes } from "./actionTypes"
import axios from 'axios'
import secureLocalStorage from 'react-secure-storage'
import { BASE_URL } from '../constants/API'


export const loginUser = async (LoggedInRequest) => {
    return (dispatch) => {
        return axios(`${BASE_URL}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(LoggedInRequest),
        })
        
        .then((res) => {
            if (res.status == 201){
                console.log("response status: ", res)
                secureLocalStorage.setItem("kiki", res.data)
                dispatch({
                    type: actionTypes.LOGIN_SUCESS,
                    payload: res.data,
                })
                return Promise.resolve()
            }
        })
        .catch(er => {
            console.log("err", er)
            alert(er.message)
        })
    }
}