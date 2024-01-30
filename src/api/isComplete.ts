import axios from "axios";

export const isCompleted = async (id : number , complete : boolean) =>{
    const response = await axios({
        method : 'PATCH',
        url : `http://localhost:8000/TaskList/${id}`,
        data : {
            isComplete : complete
        }
    })
    return response
}