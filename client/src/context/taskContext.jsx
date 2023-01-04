import { createContext } from "react";

const taskContext= createContext();

export const TaskContextProvider=({children})=>{
    return(
    <TaskContextProvider value={{text:"Hello"}}>
        {children}
    </TaskContextProvider>
    )
}