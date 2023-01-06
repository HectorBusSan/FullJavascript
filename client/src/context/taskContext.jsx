import { createContext,useContext } from "react";

export const TaskContext= createContext();

export const  useTasks=()=>{
    const context=useContext(TaskContext)
    if(!context) throw new Error("useTask must be used within a TaskContextProvider");
    return context;
}

export const TaskContextProvider=({children})=>{
    const [tasks, setTasks] = useState([]);
    return(
    <TaskContext.Provider value={{tasks}}>
        {children}
    </TaskContext.Provider>
    )
}