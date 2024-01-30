import {Auth} from "../types/Auth.ts";
import {Axios} from "../utils/axiosInstans.ts";
import {AxiosResponse} from "axios";
import {User} from "../types/user.ts";
export const signupApi = async (data : Auth) =>{
    const response : AxiosResponse<User> = await Axios({
        method : "POST",
        url : '/auth/signup' ,
        data
    })
    sessionStorage.setItem('token' , response.data.token)
    console.log(response.data.token)
    return response
}