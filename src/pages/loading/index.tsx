import Ellipse from "../../assets/icon/Ellipse.tsx";

interface Iprops {
    isLoading : boolean;
}
const Loading = ({isLoading} : Iprops) =>{

    return(
        <div className={`w-full h-screen flex justify-center items-center ${isLoading === false ? "" : 'hidden'}`}>
            <div className={'w-full relative flex flex-col items-center '}>
                <h1 className={'font-Righteous text-blue-400 text-2xl bg-white py-3'}>TASK-WAN</h1>
                <Ellipse className={'absolute -z-10 -bottom-5'}/>
            </div>
        </div>
    )
}
export default Loading