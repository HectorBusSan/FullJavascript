import { createContext } from "react";

const taskContext= createContext();

const TaskContextProvider=({children})=>{
    return(
    <TaskContextProvider value={{text:"Hello"}}>
        {children}
    </TaskContextProvider>
    )
}