import Form from "./component/Form.tsx";
import LoginWidth from "./component/LoginWidth.tsx";
import Google from "./component/icon/Google.tsx";
import Facebook from "./component/icon/Facebook.tsx";
import Twitter from "./component/icon/Twitter.tsx";
import {Link} from "react-router-dom";

const SignUp = () =>{
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
                <button className={'p-3 flex items-center justify-center bg-blue-500 rounded-lg absolute top-3 left-3'}>
                    <Link to={'/login'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
                                  fill="white"/>
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    )
}
export default SignUp