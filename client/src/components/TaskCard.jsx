import React from 'react'
import { deleteTaskRequest } from '../api/task.api'
function TaskCard({task}) {
  const handlerDelete=async(id)=>{
    try {
      const response= await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done===1?"✔️":"❌"}</span>
        <span>{task.createdAt}</span>
        <button onClick={()=>{handlerDelete(task.id)}}>Delete</button>
        <button onClick={()=>{}}>Edit</button>
    </div>
  )
}

export default TaskCard