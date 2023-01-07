import axios from "axios"

export const getTasksRequest=async()=>{
    const res=await fetch("http://localhost:4000/task")
    return await res.json();
}
export const createTaskRequest=async(task)=>{
    const res=await fetch("http://localhost:4000/task",
    {method:"POST",
    headers:{Accept:"application/json","Content-Type":"application/json"},
    body:JSON.stringify(task)
    })
    return await res.json();
}
export const deleteTaskRequest=async(id)=>{
    await fetch(`http://localhost:4000/task/${id}`,{
        method:"DELETE",
    })
}
export const getTaskRequest=async(id)=>{
    const response=await fetch(`http://localhost:4000/task/${id}`);
    return await response.json();
}
export const updateTaskRequest=async(id,newTask)=>{
    const res=await fetch(`http://localhost:4000/task/${id}`,{
        method:"PUT",
        headers:{Accept:"application/json","Content-type":"application/json"},
        body:JSON.stringify(newTask)
    })
    return res.json();
}
export const toggleTaskDoneRequest=async(id,done)=>{
    const res= await fetch(`http://localhost:4000/task/${id}`,{
        method:"PUT",
        headers:{Accept:"application/json","Content-Type":"application/json"},
        body:JSON.stringify(done)
    })
    return res.json();
}