import {Axios} from "../utils/axiosInstans.ts";
import { AxiosResponse} from "axios";

export const getUser = async () : Promise<AxiosResponse | undefined>  =>{
    try{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const token = 'Bearer ' + sessionStorage.getItem('token')
        const response: AxiosResponse  = await Axios({
            method: "GET",
            url: '/user',
            headers: {
                Authorization:  token
            }
        });

        return response

    }catch (error) {
        console.log(error)
    }
}