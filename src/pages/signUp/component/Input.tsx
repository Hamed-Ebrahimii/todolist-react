import React, {ChangeEventHandler} from "react";

interface Iprops {
    type : string ,
    placeholder : string,
    icon : React.ReactNode ,
    FnChange : ChangeEventHandler<HTMLInputElement>,
    name : string
}
const Input = ({type , placeholder , icon , FnChange , name} : Iprops) =>{
    return(
        <div className={'w-full flex '}>
            <div className={'p-4 rounded-l-xl bg-blue-500 flex justify-center items-center'}>
                {icon}
            </div>
        <input onChange={FnChange} type={type} placeholder={placeholder} className={'border border-blue-400 p-4 rounded-r-xl w-full'} name={name}/>
        </div>
    )
}
export default Input