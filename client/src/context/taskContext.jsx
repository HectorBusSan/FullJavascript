import { createContext,useContext } from "react";

export const TaskContext= createContext();

export const  useTasks=()=>{
    const context=useContext(TaskContext)
    if(!context) throw new Error("useTask must be used within a TaskContextProvider");
    return context;
}

export const TaskContextProvider=({children})=>{
    return(
    <TaskContext.Provider value={{text:"Hola",x:1000,y:-1000}}>
        {children}
    </TaskContext.Provider>
    )
}