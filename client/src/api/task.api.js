import axios from "axios"
const createTaskRequest=(task)=>{
    axios.post("http://localhost:4000/tasks")
}