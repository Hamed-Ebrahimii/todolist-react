import axios, {AxiosResponse} from "axios";
import {TaskType} from "../types/task.ts";

export const getTask = async (id : number) =>{
    const response :AxiosResponse<TaskType> = await axios({
        method : 'get' ,
        url : `http://localhost:8000/TaskList/${id}`
    })
    return response
}