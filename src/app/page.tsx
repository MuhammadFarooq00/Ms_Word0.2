/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { BiMenu } from "react-icons/bi"; 
import Header from "./components/Header"
import WriteableScreen from "./components/WriteableScreen"
import { useEffect, useState } from "react";


const page = () => {
  const [lismobile,setismobile] = useState(false);
  const [wid,setwidth] = useState(0);
  const handleResize = ()=>{
    setwidth(window.innerWidth)
  }
  useEffect(()=>{
      handleResize();
      window.addEventListener("resize",handleResize)
      return ()=>{
        window.removeEventListener("resize",handleResize)
      }
  },[])
  const handleResponsive =()=>{
    setismobile((pre)=>!pre)
  }
  return (
    <>
    <div className=" flex w-full h-screen overflow-hidden" onContextMenu={(e)=>e.preventDefault()}>
      <button onClick={handleResponsive} className=" z-10 fixed right-4 top-4 inline-block md:hidden transition-all text-gray-500 hover:text-black text-3xl"><BiMenu /></button>
    <div style={{display: "block",width: lismobile? "260px": "" , position: lismobile?"fixed":"relative"}} className=" z-10 h-screen w-0 md:w-[5rem] hidden md:block md:hover:w-[16rem] overflow-hidden text-center transition-all ">
    <Header/>
    </div>
    <div className=" w-full h-full overflow-hidden p-3 bg-black">
      <WriteableScreen/>
    </div>
    </div>
    </>
  )
}

export default page