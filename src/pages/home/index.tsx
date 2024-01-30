import {useEffect, useState} from "react";
import {getUser} from "../../api/getUser.ts";
import Task from "./component/Task.tsx";
import {TaskType} from "../../types/task.ts";
import {taskList} from "../../api/TaskList.ts";
import { CiSearch } from "react-icons/ci";
import {Link, useNavigate} from "react-router-dom";
const Home = () =>{
    const [username , setUsername] = useState('')
    const [tasks , setTasks] = useState<TaskType[]>([])
    const navigate = useNavigate()
    const fetchUser = async () =>{
        const user = await  getUser()
        setUsername(user?.data.username)
    }
    const getTasks = async (id : number) => {
        const data = await taskList(id)
        setTasks(data.data)
    }
    const getuserId = async () =>{
        const response = await getUser()
        if (!response){
            navigate('/login')
        }
        await getTasks(response?.data.id)
    }
    useEffect( () =>{
            fetchUser()

            getuserId()
    } , [])

    return(
        <div className={'w-full py-11 px-4  h-screen'}>
            <header className={'w-full flex items-center justify-between'}>
                <div>
                    <h2 className={'font-Poppins font-semibold text-xl'}>{
                      "Welcome " +
                        username
                    }</h2>
                    <p className={'text-gray-500 font-Poppins mt-1'}>Have a nice day !</p>
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9.96318 19.2279C10.4631 19.1222 13.5093 19.1222 14.0092 19.2279C14.4366 19.3266 14.8987 19.5573 14.8987 20.0608C14.8738 20.5402 14.5926 20.9653 14.204 21.2352C13.7001 21.628 13.1088 21.8767 12.4906 21.9664C12.1487 22.0107 11.8128 22.0117 11.4828 21.9664C10.8636 21.8767 10.2723 21.628 9.76938 21.2342C9.37978 20.9653 9.09852 20.5402 9.07367 20.0608C9.07367 19.5573 9.53582 19.3266 9.96318 19.2279ZM12.0452 2C14.1254 2 16.2502 2.98702 17.5125 4.62466C18.3314 5.67916 18.7071 6.73265 18.7071 8.3703V8.79633C18.7071 10.0523 19.039 10.7925 19.7695 11.6456C20.3231 12.2741 20.5 13.0808 20.5 13.956C20.5 14.8302 20.2128 15.6601 19.6373 16.3339C18.884 17.1417 17.8215 17.6573 16.7372 17.747C15.1659 17.8809 13.5937 17.9937 12.0005 17.9937C10.4063 17.9937 8.83505 17.9263 7.26375 17.747C6.17846 17.6573 5.11602 17.1417 4.36367 16.3339C3.78822 15.6601 3.5 14.8302 3.5 13.956C3.5 13.0808 3.6779 12.2741 4.23049 11.6456C4.98384 10.7925 5.29392 10.0523 5.29392 8.79633V8.3703C5.29392 6.68834 5.71333 5.58852 6.577 4.51186C7.86106 2.9417 9.91935 2 11.9558 2H12.0452Z"
                            fill="#006EE9"/>
                    </svg>
                </button>
            </header>
            <div className={'w-full py-5 '}>
                <p className={'text-lg font-Poppins text-blue-500 font-medium'}>filter for Task</p>
                <select id="countries"
                        className="bg-gray-50 border border-blue-300 w-8/12 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
                    <option selected>All</option>
                    <option value="complete">complete</option>
                    <option value="notComplete">Not complete</option>

                </select>
            </div>
            <form className={'w-full flex flex-col  justify-center gap-1'}>
                <p className={'text-blue-500 font-Poppins font-medium text-lg'}>search for task</p>
                <div className={'border border-blue-300 rounded-lg py-2 px-3 w-full flex items-center justify-between'}>
                    <input type="text" className={'border-0 outline-none placeholder:text-gray-500'} placeholder={'search'}/>
                    <button>
                    <CiSearch/>
                    </button>
                </div>
            </form>
            <div className={'mt-5'}>
                <p className={'font-bold text-xl font-Poppins'}>Daily task</p>
                <div
                    className={`w-full ${tasks.length > 0 ? 'flex' : 'hidden'} flex-col gap-3 justify-center items-center overflow-scroll mt-5`}>
                    {
                        tasks.map(task => <Task title={task.title} description={task.description} date-end={task["date-end"]} date-start={task["date-start"]}
                                                user-id={task["user-id"]} isComplete={task.isComplete} id={task.id}/>)
                    }
                </div>
                <div className={`${tasks.length < 1 ? 'flex' : 'hidden'} justify-center items-center gap-4 flex-col h-[40vh]`}>
                    <img width="64" height="64"
                         src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-not-found-no-code-flaticons-flat-flat-icons.png"
                         alt="external-not-found-no-code-flaticons-flat-flat-icons"/>
                    <p className={'text-xl text-blue-500 font-Poppins font-semibold'}>There is no task for you</p>
                </div>
            </div>
            <div className={'w-full py-1 px-2 flex justify-around items-center absolute bottom-0 rounded-lg'}>
                <button>
                    <Link to={'/home'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path
                                d="M12.1797 27.6978V23.6208C12.1797 22.5801 13.0296 21.7364 14.078 21.7364H17.9102C18.4136 21.7364 18.8964 21.9349 19.2524 22.2883C19.6084 22.6417 19.8084 23.121 19.8084 23.6208V27.6978C19.8052 28.1305 19.9761 28.5465 20.2832 28.8536C20.5903 29.1606 21.0081 29.3333 21.444 29.3333H24.0585C25.2796 29.3365 26.4517 28.8571 27.3163 28.0011C28.1808 27.145 28.6667 25.9826 28.6667 24.7704V13.1558C28.6667 12.1766 28.2295 11.2478 27.4729 10.6196L18.5787 3.56783C17.0316 2.33142 14.8149 2.37134 13.3139 3.66264L4.62272 10.6196C3.83036 11.2293 3.35678 12.1608 3.33337 13.1558V24.7586C3.33337 27.2851 5.39655 29.3333 7.94161 29.3333H10.4964C11.4017 29.3333 12.1374 28.6083 12.1439 27.7096L12.1797 27.6978Z"
                                fill="#006EE9"/>
                        </svg>
                    </Link>
                </button>
                <button>
                    <Link to={'/addTask'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path
                                d="M21.3662 2.66667C21.9323 2.66534 22.3799 3.10512 22.3812 3.69149L22.3825 4.69099C26.0554 4.97885 28.4816 7.4816 28.4855 11.3197L28.5 22.554C28.5053 26.7386 25.8763 29.3133 21.6624 29.32L11.3692 29.3333C7.1816 29.3386 4.51976 26.7026 4.5145 22.5061L4.50001 11.4036C4.49475 7.54023 6.83538 5.04415 10.5082 4.70699L10.5069 3.70749C10.5056 3.12111 10.94 2.68 11.5193 2.68C12.0985 2.67867 12.5329 3.11845 12.5342 3.70482L12.5356 4.63769L20.3552 4.62703L20.3539 3.69416C20.3526 3.10779 20.787 2.66801 21.3662 2.66667ZM21.9033 21.5892H21.8902C21.2846 21.6039 20.7988 22.1116 20.812 22.7246C20.8133 23.3377 21.3017 23.8427 21.9073 23.8561C22.5247 23.8547 23.0249 23.347 23.0236 22.7206C23.0236 22.0943 22.522 21.5892 21.9033 21.5892ZM11.0559 21.5905C10.4503 21.6172 9.9764 22.1249 9.97771 22.738C10.0054 23.351 10.5056 23.8307 11.1112 23.8028C11.7049 23.7761 12.1775 23.2684 12.1498 22.6553C12.1367 22.0556 11.6483 21.5892 11.0559 21.5905ZM16.4796 21.5839C15.874 21.6119 15.4014 22.1183 15.4014 22.7313C15.4291 23.3443 15.9293 23.8227 16.5349 23.7961C17.1273 23.7681 17.6012 23.2617 17.5736 22.6473C17.5604 22.049 17.072 21.5825 16.4796 21.5839ZM11.0493 16.7929C10.4437 16.8196 9.97113 17.3273 9.97244 17.9404C9.99878 18.5534 10.5003 19.0331 11.1059 19.0052C11.6983 18.9785 12.1709 18.4708 12.1433 17.8577C12.1301 17.258 11.643 16.7916 11.0493 16.7929ZM16.4743 16.7463C15.8688 16.7729 15.3949 17.2807 15.3962 17.8937C15.4225 18.5067 15.9241 18.9852 16.5296 18.9585C17.122 18.9305 17.5946 18.4241 17.5683 17.8111C17.5538 17.2114 17.0667 16.745 16.4743 16.7463ZM21.8981 16.753C21.2925 16.7663 20.8186 17.2594 20.8199 17.8724V17.8871C20.8331 18.5001 21.3333 18.9652 21.9402 18.9519C22.5326 18.9372 23.0052 18.4294 22.992 17.8164C22.9644 17.23 22.4891 16.7516 21.8981 16.753ZM20.3578 6.67933L12.5382 6.68999L12.5395 7.76812C12.5395 8.3425 12.1064 8.7956 11.5272 8.7956C10.9479 8.79694 10.5122 8.34516 10.5122 7.77078L10.5109 6.74463C7.94382 7.00184 6.52338 8.51041 6.52732 11.401L6.52865 11.8154L26.4595 11.7888V11.3223C26.4029 8.45711 24.9654 6.95386 22.3851 6.72997L22.3865 7.75613C22.3865 8.32917 21.9402 8.78361 21.3741 8.78361C20.7949 8.78494 20.3591 8.33184 20.3591 7.75879L20.3578 6.67933Z"
                                fill="#006EE9"/>
                        </svg>
                    </Link>
                </button>
                <button>
                    <Link to={'home'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path
                                d="M16 20.2319C21.7848 20.2319 26.6666 21.1719 26.6666 24.7986C26.6666 28.4267 21.7528 29.3333 16 29.3333C10.2165 29.3333 5.33331 28.3933 5.33331 24.7666C5.33331 21.1386 10.2472 20.2319 16 20.2319ZM16 2.66667C19.9188 2.66667 23.0586 5.80537 23.0586 9.72141C23.0586 13.6374 19.9188 16.7775 16 16.7775C12.0825 16.7775 8.94133 13.6374 8.94133 9.72141C8.94133 5.80537 12.0825 2.66667 16 2.66667Z"
                                fill="#006EE9"/>
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    )
}
export default Home