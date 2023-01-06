import axios from "axios"

export const getTasksRequest=async()=>{
    const res=await fetch("http://localhost:4000/task")
    return await res.json();
}
export const createTaskRequest=async(task)=>{
    await axios.post("http://localhost:4000/task",task)
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