import React, { useCallback, useContext, useMemo, useState } from 'react'
import './App.css'
import Firstlevel from './Firstlevel'
import Button from './Button'
import NoteContext from './contextApi/note/NoteContext'

export default function App() {
  const [count,setCount]=useState(0)

  const mybiodata=useMemo(()=>{
  return{
    name:"Anurag",
    rollno:17
  }
  },[])
  const increment=useCallback(()=>{
    console.log("increment button")
    setCount(count+1)
  },[])
  const decrement=useCallback(()=>{
    console.log("decrement button")
    setCount(count-1)
  },[])
  return (
    <>
        <div className='container'>
        <Firstlevel StudentInfo={mybiodata}/>
        <button onClick={()=>setCount(count+1)}>increment++</button>
        <p>{count}</p>
        <Button onclick={increment} name={"Increment"}></Button>
        <Button onclick={decrement} name={"Decrement"}></Button>
        </div>
    </>
  )
}
