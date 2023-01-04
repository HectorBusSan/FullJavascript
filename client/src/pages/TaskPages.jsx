import { useEffect } from 'react'
import { getTasksRequest } from '../api/task.api.js'
function TaskPages() {
  useEffect(()=>{

    async function loadTasks(){
      const response =await getTasksRequest();
      console.log(response);
    }

    loadTasks();

  },[])
  
  return (
    <div>
      <h1>Task</h1>

    </div>
  )
}

export default TaskPages