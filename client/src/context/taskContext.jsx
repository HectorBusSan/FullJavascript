import { createContext } from "react";

export const TaskContext= createContext();

export const TaskContextProvider=({children})=>{
    return(
    <TaskContext.Provider value={{text:"Hola"}}>
        {children}
    </TaskContext.Provider>
    )
}