import { useEffect,useState } from 'react'
import { getTasksRequest } from '../api/task.api.js'
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
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done===1?"✔️":"❌"}</span>
            <span>{task.createdAt}</span>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskPages