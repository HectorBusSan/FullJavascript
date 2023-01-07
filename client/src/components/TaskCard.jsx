import React from 'react'
import { useTasks } from '../context/TaskProvider'
import { useNavigate } from 'react-router-dom';
function TaskCard({task}) {
  const {deleteTask,toggleTaskDone}=useTasks();
  const navigate= useNavigate();
  const handlerDone=async()=>{
    await toggleTaskDone(task.id)
  }
  return (
    <div className='bg-slate-300 p-4 rounded'>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={()=>{handlerDone()}}>
          <span>{task.done===1?"✔️":"❌"}</span>
        </button>
        <span>{task.createdAt}</span>
        <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
        <button onClick={()=>{navigate(`/edit/${task.id}`)}}>Edit</button>
    </div>
  )
}

export default TaskCard