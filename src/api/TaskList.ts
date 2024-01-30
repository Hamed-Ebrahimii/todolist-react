import axios, {AxiosResponse} from "axios";
import {TaskType} from "../types/task.ts";

export const taskList = async (userId : number) => {
    const response : AxiosResponse<TaskType[]> = await axios({
        method : 'GET',
        url : `http://localhost:8000/TaskList?user-id=${userId}`
    })
    return response
}