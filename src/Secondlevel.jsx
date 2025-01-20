import React, { useContext } from 'react'
import NoteContext from './contextApi/note/NoteContext'
export default function Secondlevel() {
    const {count}=useContext(NoteContext)
    console.log(count)
  return (
    <div>{count}</div>
  )
}
