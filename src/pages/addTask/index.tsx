import {Link, useNavigate} from "react-router-dom";
import DatePicker, {DateObject} from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import "react-multi-date-picker/styles/layouts/mobile.css"
import {ChangeEventHandler, FormEventHandler, useState} from "react";
import {TaskType} from "../../types/task.ts";
import {getUser} from "../../api/getUser.ts";
import {addTask} from "../../api/addTask.ts";
const AddTask = () =>{
    const [dateStart , setDateStart] = useState<DateObject>()
    const [dateEnd , setDateEnd] = useState<DateObject>()
    const [task , setTask] = useState<TaskType>({
        title : '' ,
        description : '',
        "user-id" : 0,
        isComplete : false,
        "date-start" : '',
        "date-end" : ''
    })
    const navigate = useNavigate()
    const handleInput : ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>= (event) => {

        setTask((prevState)=> {
            const name : 'title' | 'description' = event.target.name as 'title' | 'description'
            if (name === 'title') {

                prevState!.title = event.target.value
            }
            else {
                prevState!.description = event.target.value
            }
            return prevState
        })
    }
    const handleSubmit  : FormEventHandler<HTMLFormElement>= async (event) =>{
        event.preventDefault()
        const userId = await getUser()
        setTask((prevState)=>{
            prevState!.isComplete = false
            prevState!["date-start"] = `${dateStart?.year}/${dateStart?.month}/${dateStart?.day}`
            prevState!["date-end"] = `${dateEnd?.year}/${dateEnd?.month}/${dateEnd?.day}`
            prevState!["user-id"] = userId?.data.id
            return prevState
        })
          await addTask(task!)
        navigate('/')
    }
    return(
        <div className={'w-full h-screen bg-blue-600 py-6 '}>
            <header className={'w-full flex justify-between items-center pb-8 p-6'}>
                <button className={'flex justify-center items-center bg-white rounded-xl p-3'}>
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
                                  fill="#006EE9"/>
                        </svg>
                    </Link>
                </button>
                <p className={'text-white text-xl font-Poppins justify-self-center text-center'}>Add task</p>
            </header>
            <form onSubmit={handleSubmit} className={'w-full h-[90vh] bg-white rounded-t-3xl p-6 flex flex-col gap-2'}>
                <div className={'w-full flex items-center justify-between'}>
                    <div className={'flex flex-col gap-2 w-1/2'}>
                        <p className={'font-Poppins text-lg text-blue-500 font-medium'}>start</p>
                        <div
                            className={'border border-blue-300 rounded-3xl flex items-center justify-center px-2 py-1 w-10/12'}>
                            <label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18"
                                     fill="none">
                                    <path
                                        d="M14.7273 1.63636H13.9091V0H12.2727V1.63636H4.09091V0H2.45455V1.63636H1.63636C0.736364 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.736364 18 1.63636 18H14.7273C15.6273 18 16.3636 17.2636 16.3636 16.3636V3.27273C16.3636 2.37273 15.6273 1.63636 14.7273 1.63636ZM14.7273 16.3636H1.63636V5.72727H14.7273V16.3636Z"
                                        fill="#006EE9"/>
                                </svg>
                            </label>
                            <DatePicker onChange={setDateStart}
                                        className={'rmdp-mobile'}
                                        calendar={persian}
                                        locale={persian_fa}
                                        style={
                                            {
                                                border: 0,
                                                width: '70%'
                                            }
                                        }
                                        value={dateStart}
                            />
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2 w-1/2 items-end'}>
                        <p className={'font-Poppins text-lg text-blue-500 font-medium'}>end</p>
                        <div
                            className={'border border-blue-300 rounded-3xl flex items-center justify-center px-2 py-1 w-10/12'}>
                            <label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18"
                                     fill="none">
                                    <path
                                        d="M14.7273 1.63636H13.9091V0H12.2727V1.63636H4.09091V0H2.45455V1.63636H1.63636C0.736364 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.736364 18 1.63636 18H14.7273C15.6273 18 16.3636 17.2636 16.3636 16.3636V3.27273C16.3636 2.37273 15.6273 1.63636 14.7273 1.63636ZM14.7273 16.3636H1.63636V5.72727H14.7273V16.3636Z"
                                        fill="#006EE9"/>
                                </svg>
                            </label>
                            <DatePicker onChange={setDateEnd}
                                        value={dateEnd}
                                        className={'rmdp-mobile'}
                                        calendar={persian}
                                        locale={persian_fa}
                                        style={
                                            {
                                                border: 0,
                                                width: '70%'
                                            }
                                        }
                            />
                        </div>
                    </div>
                </div>
                <div className={'w-full flex flex-col gap-2 '}>
                    <p className={'text-lg font-medium font-Poppins text-blue-500 mt-2'}>title</p>
                    <input type="text" name={'title'} onChange={handleInput} className={'w-full py-2 px-1 border border-blue-300 rounded-xl outline-none'}/>
                </div>
                <div className={'flex w-full flex-col gap-2'}>
                    <p className={'text-lg font-medium font-Poppins text-blue-500 mt-2'}>description</p>
                    <textarea name={'description'} onChange={handleInput} className={'w-full border border-blue-300 p-3 rounded-xl'} cols={20} rows={8}></textarea>
                </div>
                <button className={'w-full bg-blue-500 text-white font-medium font-Poppins flex items-center justify-center py-3 rounded-xl mt-3'}>create task</button>
            </form>
        </div>
    )
}
export default AddTask