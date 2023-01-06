import { createContext,useContext,useState } from "react";

export const TaskContext= createContext();

export const  useTasks=()=>{
    const context=useContext(TaskContext)
    if(!context) throw new Error("useTask must be used within a TaskContextProvider");
    return context;
}

export const TaskContextProvider=({children})=>{
    const [tasks, setTasks] = useState([]);
    async function loadTasks(){
        const response= await getTasksRequest();
        setTasks(response);
        console.log(response);
      }
    return(
    <TaskContext.Provider value={{tasks,loadTasks}}>
        {children}
    </TaskContext.Provider>
    )
}