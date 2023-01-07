import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='bg-zinc-700 flex justify-between px-10'>
        <h1>React MySQL</h1>
        <ul className='flex'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/new">Create task</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation