import Input from "./Input.tsx";
import User from "./icon/User.tsx";
import Password from "./icon/Password.tsx";
import React, {ChangeEventHandler, useState} from "react";
import {Auth} from "../../../types/Auth.ts";
import {loginApi} from "../../../api/login.ts";
import {useNavigate} from "react-router-dom";

const Form = () =>{
    const [data, setData] = useState<Auth>({
        username : '' ,
        password : ''
    })
    const navigate = useNavigate()
    const handleSubmit : React.FormEventHandler<HTMLFormElement> = async (event) =>{
        event.preventDefault()

        const response =  await loginApi(data)
        if (response.status < 400){
            navigate('/')
        }
    }
    const handleInput : ChangeEventHandler<HTMLInputElement>= (event) => {

        setData((prevState)=> {
            const name : 'username' | 'password' = event.target.name as 'username' | 'password'
            if (name === 'username') {
                prevState.username = event.target.value
            }
            else {
                prevState.password = event.target.value
            }
            return prevState
        })
    }

    return (
        <form  onSubmit={handleSubmit} className={'w-full flex flex-col items-center gap-4 py-20'}>
            <p className={'font-Poppins font-medium '}>login</p>
            <div className={'mt-10 w-full flex flex-col gap-4'}>
                <Input type={'text'} placeholder={'Username'} icon={<User/>} FnChange={handleInput} name={'username'}/>
                <Input type={'password'} placeholder={'Password'} icon={<Password/>} FnChange={handleInput} name={'password'} />

            </div>
            <button className={'w-full py-3 bg-blue-500 text-white text-lg rounded-lg mt-8'}>login</button>
        </form>
    )
}
export default  Form