import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='bg-zinc-700 flex justify-between px-20 py-2 fixed w-full'>
        <Link to="/" className='text-white font-bold text-lg'>
          <h1>React MySQL</h1>
        </Link>
        <ul className='flex gap-x-2'>
            <li>
                <Link className='bg-gray-100 px-2 py-1 rounded' to="/">Home</Link>
            </li>
            <li>
                <Link className='bg-gray-100 px-2 py-1 rounded' to="/new">Create task</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation