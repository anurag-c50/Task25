import React, { useContext,useCallback, useMemo, memo } from 'react'
import NoteContext from './contextApi/note/NoteContext'
function Firstlevel({StudentInfo}){
  const sum=()=>{
  let i;
  for(i=0;i<1000000000;i++){
    i=i+1;
  }
  console.log(2)

  return i
}
const total=sum()
  return (
    <>{StudentInfo.name}
      <p>{total}</p>   
    </>
)
}
export default memo(Firstlevel)