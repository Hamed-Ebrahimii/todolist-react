import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {TaskType} from "../../types/task.ts";
import {getTask} from "../../api/getTask.ts";
import {Delete} from "../../api/Delete.ts";
import {isCompleted} from "../../api/isComplete.ts";
const TaskInfo = () =>{
    const [params] = useSearchParams()
    const [task , setTask] = useState<TaskType>()

    const navigate = useNavigate()
    const getTaskInfo = async () =>{
        const data = await getTask(Number(params.get('id')))
            setTask(data?.data)

    }
    const handleClose = () =>{
        navigate('/')
    }
    const handleDelete = async () =>{
        await Delete(task!.id!)
        navigate('/')
    }
    const handleComplete = async () =>{
       await isCompleted(task!.id! , !task?.isComplete)
        navigate('/')
    }

    useEffect(()=>{
        getTaskInfo()

    } , [])
    return(
        <div className={'w-full py-3 px-2 flex flex-col h-screen'}>
          <div className={'w-full flex items-center justify-between'}>
              <p className={'text-2xl font-Poppins text-blue-500 font-bold w-1/2 overflow-hidden whitespace-nowrap text-ellipsis '}>{task?.title}</p>
              <button onClick={handleClose} className={'p-1 rounded-xl bg-blue-500 flex justify-center items-center'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                          d="M21.5097 -0.0012207C26.5947 -0.0012207 29.9997 3.56878 29.9997 8.87878V21.1353C29.9997 26.4303 26.5947 29.9988 21.5097 29.9988H8.5047C3.4197 29.9988 -0.000297546 26.4303 -0.000297546 21.1353V8.87878C-0.000297546 3.56878 3.4197 -0.0012207 8.5047 -0.0012207H21.5097ZM19.5147 10.4553C19.0047 9.94378 18.1797 9.94378 17.6547 10.4553L14.9997 13.1238L12.3297 10.4553C11.8047 9.94378 10.9797 9.94378 10.4697 10.4553C9.9597 10.9653 9.9597 11.8053 10.4697 12.3138L13.1397 14.9853L10.4697 17.6403C9.9597 18.1653 9.9597 18.9903 10.4697 19.4988C10.7247 19.7538 11.0697 19.8903 11.3997 19.8903C11.7447 19.8903 12.0747 19.7538 12.3297 19.4988L14.9997 16.8453L17.6697 19.4988C17.9247 19.7703 18.2547 19.8903 18.5847 19.8903C18.9297 19.8903 19.2597 19.7538 19.5147 19.4988C20.0247 18.9903 20.0247 18.1653 19.5147 17.6553L16.8447 14.9853L19.5147 12.3138C20.0247 11.8053 20.0247 10.9653 19.5147 10.4553Z"
                          fill="#fff"/>
                  </svg>
              </button>
          </div>
            <div className={'w-full flex items-center justify-between mt-5'}>
                <div>
                    <p className={'text-gray-500'}>start</p>
                    <p className={'font-Poppins text-lg text-gray-700'}>{task?.["date-start"]}</p>
                </div>
                <div className={'flex flex-col items-end'}>
                    <p className={'text-gray-500'}>end</p>
                    <p className={'font-Poppins text-lg text-gray-700'}>{task?.["date-end"]}</p>
                </div>
            </div>
            <div className={'w-full flex flex-col gap-2 mt-8 grow'}>
                <h2 className={'text-lg text-blue-500 font-medium font-Poppins'}>Description</h2>
                <p className={'text-gray-500 font-Poppins'}>{
                    task?.description
                }</p>
            </div>
            <div className={'w-full flex flex-col gap-2'}>
                <button
                    onClick={handleComplete}
                    className={'w-full rounded-xl flex justify-center items-center py-2 text-white font-Poppins text-xl bg-blue-500'}>
                    {task?.isComplete === false ? 'finished' : 'un completed'}
                </button>
                <button
                    className={'w-full rounded-xl flex justify-center items-center py-2 text-white font-Poppins text-xl bg-yellow-400'}>
                    <Link  to={`/edit/${task?.id}` }>Edit</Link>
                </button>
                <button onClick={handleDelete}
                    className={'w-full rounded-xl flex justify-center items-center py-2 text-white font-Poppins text-xl bg-red-500'}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default TaskInfo