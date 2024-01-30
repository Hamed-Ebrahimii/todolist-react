import Form from "./component/Form.tsx";
import LoginWidth from "./component/LoginWidth.tsx";
import Google from "./component/icon/Google.tsx";
import Facebook from "./component/icon/Facebook.tsx";
import Twitter from "./component/icon/Twitter.tsx";
import {Link} from "react-router-dom";

const Login = () =>{
    return(
        <div className={'w-full px-4'}>
            <div className={'w-full flex items-center justify-center flex-col gap-2  py-16'}>
                <h1 className={'text-2xl font-Righteous font-bold text-blue-500'}>TASK-WAN</h1>
                <p className={'text-gray-400 font-Poppins'}>Management  App</p>
                <Form/>
                <p className={'font-Poppins '}> Or Login width</p>
                <div className={'w-full flex items-center justify-around'}>
                    <LoginWidth Icon={<Google/>}/>
                    <LoginWidth Icon={<Facebook/>}/>
                    <LoginWidth Icon={<Twitter/>}/>
                </div>
                <div className={'mt-4 w-full flex items-center justify-center gap-1'}>
                    <p className={'text-gray-400 font-Poppins'}>Don’t have an account?</p>
                    <Link to={'/signUp'} className={'font-Poppins font-medium text-blue-400'}>sign up</Link>
                </div>
            </div>
        </div>
    )
}
export default Login