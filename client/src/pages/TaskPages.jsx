import { useEffect,useState } from 'react'
import { getTasksRequest } from '../api/task.api.js'
function TaskPages() {

  const [task, setTask] = useState([]);

  useEffect(() => {  
    async function LoadTasks(){
      const response= await getTasksRequest();
      console.log(response);
    }
    LoadTasks();
  },[])
  
  
  return (
    <div>
      <h1>Task</h1>

    </div>
  )
}

export default TaskPages