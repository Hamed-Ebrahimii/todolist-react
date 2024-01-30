import {TaskType} from "../types/task.ts";
import axios from "axios";

export const addTask = async (data : TaskType) =>{
    const response = await axios({
        method: "POST",
        url : 'http://localhost:8000/TaskList',
        data
    })
    return response.status
}