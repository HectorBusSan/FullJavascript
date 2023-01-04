import { useEffect,useState } from 'react'
import { getTasksRequest } from '../api/task.api.js'
import TaskCard from '../components/TaskCard.jsx';
function TaskPages() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {  
    async function LoadTasks(){
      const response= await getTasksRequest();
      setTasks(response);
      console.log(response);
    }
    LoadTasks();
  },[])
  
  
  return (
    <div>
      <h1>Task</h1>
      {
        tasks.map(task=>(
          <TaskCard task={task}/>
        ))
      }
    </div>
  )
}

export default TaskPages