import React from "react";

interface Iprops {
    Icon : React.ReactNode
}
const LoginWidth = ({Icon} : Iprops) =>{
    return(
        <div className={'p-5 flex justify-center items-center border border-blue-300 rounded-lg'}>
            {Icon}
        </div>
    )
}
export default LoginWidth