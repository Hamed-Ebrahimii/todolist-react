import axios from "axios";

export const Delete = async (id : number) =>{
   await axios({
        method : "DELETE",
       url : `http://localhost:8000/TaskList/${id}`
    })
}