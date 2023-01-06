import { useContext,useState } from "react";
import { getTasksRequest,deleteTaskRequest } from "../api/task.api";
import { TaskContext } from "./taskContext";
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

      const deleteTask=async(id)=>{
        try {
          const response= await deleteTaskRequest(id);
          console.log(response);
          loadTasks();
        } catch (error) {
          console.log(error);
        }
      }

    return(
    <TaskContext.Provider value={{tasks,loadTasks,deleteTask}}>
        {children}
    </TaskContext.Provider>
    )
}