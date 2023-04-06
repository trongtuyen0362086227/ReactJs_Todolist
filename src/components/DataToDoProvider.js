import React, { createContext, useState } from 'react'
import { useContext } from 'react'
export const DataContext = createContext();
export default function DataToDoProvider(props) {
    const [todos,setToDos] = useState();
  return (
    <DataContext.Provider value={[todos,setToDos]}>
        {props.children}
    </DataContext.Provider>
  )
}
