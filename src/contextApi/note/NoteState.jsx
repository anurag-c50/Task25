import React,{ useEffect, useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = ({children}) => {
  const [count,setCount]=useState(0)

    return (
    <NoteContext.Provider value={{count,setCount}}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;