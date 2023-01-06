import { createContext } from "react";

export const TaskContext= createContext();

export const TaskContextProvider=({children})=>{
    return(
    <TaskContext.Provider value={{text:"Hola",x:1000,y:-1000}}>
        {children}
    </TaskContext.Provider>
    )
}