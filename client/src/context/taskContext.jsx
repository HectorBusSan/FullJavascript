import { createContext,useContext,useState } from "react";
import { getTasksRequest } from "../api/task.api";

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

      const handlerDelete=async(id)=>{
        try {
          const response= await deleteTaskRequest(id);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      
    return(
    <TaskContext.Provider value={{tasks,loadTasks}}>
        {children}
    </TaskContext.Provider>
    )
}