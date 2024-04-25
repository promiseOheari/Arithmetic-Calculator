import React, { useState } from 'react'
import prr from "./calc.module.css"

function Calc() {
    const [value, setValue] = useState("")
     const [ac, setAc] = useState("")
     const [dc, setDc] = useState("")

     const del = ()=>{
        setDc(value-1)
     }
       
    console.log(value)
    
  return (
    <div className='bg-[#383838] w-full flex flex-col items-center justify-center  h-[100vh] '>
        <h1 className='text-[36px] mb-[40px] text-white font-bold font-mono'>Basic Calculator</h1>
        <div className='bg-[#f5f5f5] w-[30%]h-full p-[20px] rounded-[10px]'>
            <input value={value}  className='w-[100%] h-[70px] bg-[#3d1548] text-[24px] text-white text-right p-[20px] rounded-[10px] mb-[20px]'/>

            <div className={prr.container}>
                <input type='button' value="AC" onClick={(e)=>{
                         setValue('')
                }}/>
                <input type='button' value="DC"  onClick={(e)=>{
                     setValue(value.slice(0, -1))
                       
                }}/>
                <input type='button' value="."  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="/"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="8"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="9"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="7"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="+"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="4"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="5"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="6"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="*"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="1"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="2"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="3"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="-"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="0"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="00"  onClick={(e)=>{
                        setValue(value + e.target.value)
                }}/>
                <input type='button' value="="  onClick={(e)=>{
                        setValue(eval(value))
                }}/>
            </div>
        </div>
    </div>
  )
}

export default Calc



