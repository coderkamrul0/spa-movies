import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const Cart = ({watchTime}) => {

    const [time,setTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)

    useEffect(()=>{
        const getWatchTimeFromStorage = localStorage.getItem('watchTime');
        setTime(getWatchTimeFromStorage);

    },[watchTime])

    const handleBreakTime = (bt) =>{
        localStorage.setItem('breakTime',bt)
        setBreakTime(bt);
    }

    const handleComplete = () =>{
        toast(time-breakTime)
    }

    return (
        <div className=''>
            <div className=' w-[300px] ms-5 text-center'>
                <h1 className='text-4xl text-center font-bold pb-5'>Watch List</h1>
                <div className='py-5'>
                    <p className='text-xl'>total watch time</p>
                    <input className='p-2' type="text" value={time} disabled />
                </div>
                <div className='py-5'>
                    <h2 className='py-2 text-xl'>Add Break time</h2>
                    <div className='flex justify-around'>
                        <button onClick={()=> handleBreakTime(15)} className='bg-green-600 p-5 rounded text-white'>15</button>
                        <button onClick={()=> handleBreakTime(20)} className='bg-red-600 p-5 rounded text-white'>20</button>
                        <button onClick={()=> handleBreakTime(25)} className='bg-cyan-600 p-5 rounded text-white'>25</button>
                    </div>
                    <input className='my-3 py-2 px-2' type="text" value={breakTime} disabled />
                </div>
                <button onClick={handleComplete} className='w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800'>Complete</button>
            </div>
    </div>
    );
};

export default Cart;