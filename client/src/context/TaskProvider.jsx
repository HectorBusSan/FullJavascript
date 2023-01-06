import { useContext,useState } from "react";
import { getTasksRequest,deleteTaskRequest,createTaskRequest } from "../api/task.api";
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
          // loadTasks();
          // seguna opción para mostrar lo eliminado
          setTasks(tasks.filter(task=>task.id!=id));
        } catch (error) {
          console.log(error);
        }
      }

      const createTask=async(task)=>{
        try{
          await createTaskRequest(task);
          console.log(task);

        }catch(err){
          console.log(err);
        }
      }

    return(
    <TaskContext.Provider value={{tasks,loadTasks,deleteTask,createTask}}>
        {children}
    </TaskContext.Provider>
    )
}