import React, { useState } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [watchTime,setWatchTime] = useState(0)

  const handleWatchTime = (time)=>{
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if(previousWatchTime){
      const sum = previousWatchTime+ time;
      localStorage.setItem('watchTime',sum);
      setWatchTime(sum);
    }else{
      localStorage.setItem('watchTime',time);
      setWatchTime(time);
    }
  }

  return (
    <div className="App px-40">
      <Header></Header>
      <div className="flex justify-between">
        <div className="">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="">
          <Cart watchTime={watchTime}></Cart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
