import React, { useCallback, useContext, useMemo, useState } from 'react'
import './App.css'
import Firstlevel from './Firstlevel'
import Secondlevel from './Secondlevel'
import NoteContext from './contextApi/note/NoteContext'
export default function App() {
  const {count,setCount}=useContext(NoteContext)
  const LargeCalculation=()=>{
    const sum=()=>{
    let i;
    for(i=0;i<1000000000;i++){
      i=i+1;
    }
    return i
  }
  const total=useCallback(()=>
    sum()
  ,[]) 
  return <p>{total}</p>
  }
  return (
    <>
        <div className='container'>
        <LargeCalculation/>
        <button onClick={()=>setCount(count+1)}>increment++</button>
        <p>{count}</p>
        </div>
        <Firstlevel></Firstlevel>
        <Secondlevel></Secondlevel>
    </>
  )
}
