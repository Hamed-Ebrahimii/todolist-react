import {TaskType} from "../../../types/task.ts";
import { ChangeEventHandler, useState} from "react";
import {isCompleted} from "../../../api/isComplete.ts";
import {useNavigate} from "react-router-dom";

const Task = ({  title , isComplete , id} : TaskType) =>{
    const [complete , setComplete] = useState(isComplete)
    const navigate = useNavigate()
    const handleInput : ChangeEventHandler<HTMLInputElement> = async (event) => {
        setComplete(event.target.checked)
        await isCompleted(id! , !complete)
    }
    const handleTask = () => {
        navigate(`/task?id=${id}`)
    }
    return (
        <div className={'w-full border border-blue-300 rounded-xl px-2 py-3 flex items-center justify-between'}>
            <p onClick={handleTask} className={`${complete ? 'text-blue-500' : 'text-gray-700'} font-Poppins text-lg font-medium` }>
                {title}
            </p>
            <input type={'checkbox'}  className={'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'} checked={complete} onChange={handleInput}/>
        </div>
    )
}
export default Task