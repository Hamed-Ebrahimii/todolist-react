import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home";
import OnBoarding from "../pages/onBoarding";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import AddTask from "../pages/addTask";
import TaskInfo from "../pages/TaskInfo";
import Edite from "../pages/edite";
import {getTask} from "../api/getTask.ts";

const RouteApp = () =>{
    const router = createBrowserRouter([
        {
            path : '/' ,
            element : <Home/>
        },
        {
            path : '/onboarding' ,
            element : <OnBoarding/>
        },
        {
            path : '/login' ,
            element : <Login/>
        },
        {
            path : '/signup' ,
            element : <SignUp/>
        },
        {
            path : '/addTask',
            element : <AddTask/>
        },
        {
            path : '/task',
            element : <TaskInfo/>
        },
        {
            path : '/edit/:id',
            loader : async ({params}) =>{
                const data = await  getTask(Number(params.id))
                return data.data
            } ,
            element : <Edite/>
        }
    ])
    return(
        <RouterProvider router={router}/>
    )
}
export default RouteApp