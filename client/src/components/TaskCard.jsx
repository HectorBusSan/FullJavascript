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
        <header className='flex justify-between'>
          <h2 className='text-sm font-bold'>{task.title}</h2>
        </header>
        <p>{task.description}</p>
        <button onClick={()=>{handlerDone()}}>
          <span>{task.done===1?"✔️":"❌"}</span>
        </button>
        <span>{task.createdAt}</span>
        <div>
          <button onClick={()=>{deleteTask(task.id)}}>Delete</button>
          <button onClick={()=>{navigate(`/edit/${task.id}`)}}>Edit</button>
        </div>
    </div>
  )
}

export default TaskCard