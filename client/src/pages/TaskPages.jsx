import { useEffect,useState } from 'react'
import { getTasksRequest } from '../api/task.api.js'
import TaskCard from '../components/TaskCard.jsx';
function TaskPages() {


  useEffect(() => {  
    async function LoadTasks(){
      const response= await getTasksRequest();
      setTasks(response);
      console.log(response);
    }
    LoadTasks();
  },[])
  
  function renderMain(){
    if(tasks.length===0) return <h1>No Task yet</h1>
    return tasks.map(task=>(<TaskCard task={task} key={task.id}/>));
  };
  
  return (
    <div>
      <h1>Task</h1>
      {renderMain()}  
    </div>
  )
}

export default TaskPages