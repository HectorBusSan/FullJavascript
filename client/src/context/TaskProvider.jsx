import { useContext,useState } from "react";
import { getTasksRequest,deleteTaskRequest,createTaskRequest, getTaskRequest, updateTaskRequest, toggleTaskDoneRequest} from "../api/task.api";
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
      const getTask=async(id)=>{
        try{
          const response =await getTaskRequest(id);
          return response;
        }
        catch(err){
          console.log(err);
        }
      }
      const updateTask=async(id,newFields)=>{
        try{
          const response=await updateTaskRequest(id,newFields);
          console.log(response);
        }catch(err){
          console.log(err)
        }
      }
      const toggleTaskDone=async(id)=>{
        try{
          const taskFound=tasks.find(task=>task.id===id)
          await toggleTaskDoneRequest(id,taskFound.done===0?true:false);
          setTasks(
            tasks.map((task)=>
              task.id===id?
                {...task,done:(task.done==1?0:1)}
              :task
            )
          );
          console.log(taskFound);
          console.log(tasks);
        }catch(error){
          console.error(error);
        }
      }
    return(
    <TaskContext.Provider value={{tasks,loadTasks,deleteTask,createTask,getTask,updateTask,toggleTaskDone}}>
        {children}
    </TaskContext.Provider>
    )
}