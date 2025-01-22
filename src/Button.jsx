import React, { memo, useContext } from 'react'
import NoteContext from './contextApi/note/NoteContext'
function Button({onclick,name}) {
  console.log(name)
  return (
    <>
    <input type="button" onClick={onclick} value={name} />
    </>
  )
}
export default memo(Button)