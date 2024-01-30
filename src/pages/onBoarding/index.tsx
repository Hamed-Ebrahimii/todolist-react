import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
const OnBoarding = () =>{
    const swiper = useRef<SwiperRef>(null)
    const btn = useRef<HTMLButtonElement>(null)
    const navigate = useNavigate()
    return(
        <>

            <Swiper
                pagination={
                {
                    dynamicBullets : true,
                }
                }
                modules={[Pagination]}
                className={'w-full h-screen flex flex-col justify-center items-center'}
                ref={swiper}
                onReachEnd={()=>{
                    btn.current!.onclick = () =>{
                        navigate('/login')
                    }
                }}
            >
                <SwiperSlide>
                    <img src="/src/assets/icon/bro.svg" alt=""/>
                    <p className={'text-lg font-medium font-Poppins'}>Easy Time Management</p>
                    <p className={'font-normal text-center text-gray-600'}>With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/icon/Chart.svg" alt=""/>
                    <p className={'text-lg font-medium font-Poppins'}>Easy Time Management</p>
                    <p className={'font-normal text-center text-gray-600'}>With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/icon/message.svg" alt=""/>
                    <p className={'text-lg font-medium font-Poppins'}>Easy Time Management</p>
                    <p className={'font-normal text-center text-gray-600'}>With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first </p>
                </SwiperSlide>
               <div className={'w-full px-6 flex justify-center'}>
                   <button ref={btn} onClick={()=> swiper.current?.swiper.slideNext()} className={'w-full py-3 bg-blue-500 rounded-full text-white flex items-center justify-center font-Poppins'}>
                       Get Started
                   </button>
               </div>
                <button onClick={()=> navigate('/login')} className={'absolute top-3 right-2 text-blue-500 font-Poppins font-medium z-20'}>Skipp</button>
            </Swiper>
        </>
    )
}
export default OnBoarding