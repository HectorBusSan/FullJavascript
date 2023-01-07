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
    <div className='bg-zinc-700 p-4 rounded text-white shadow-lg hover:shadow-cyan-500/50 ease-linear duration-300'>
        <header className='flex justify-between uppercase'>
          <h2 className='text-sm font-bold'>{task.title}</h2>
          <button className='bg-gray-200 px-2 py-1 text-white rounded m-1 hover:bg-sky-700 ease-in duration-300' onClick={()=>{handlerDone()}}>
            <span>{task.done===1?"✔️":"❌"}</span>
          </button>
        </header>
        <p className='text-xs'>{task.description}</p>
        <span className='m-y-4'>{task.createdAt}</span>
        <div className=' flex gap-x-3'>
          <button className='bg-red-500 px-2 py-1 text-white rounded' onClick={()=>{deleteTask(task.id)}}>Delete</button>
          <button className='bg-blue-500 px-2 py-1 text-white rounded' onClick={()=>{navigate(`/edit/${task.id}`)}}>Edit</button>
        </div>
    </div>
  )
}

export default TaskCard