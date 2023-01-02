import { pool } from "../db.js";

export const getTasks=(req,res)=>{
    res.send("Obteniendo tareas");
}
export const getTask=(req,res)=>{
    res.send("Obteniendo tarea");
}
export const createTask=async(req,res)=>{
    const {title,description} = req.body;
    const [result] = await pool.query("Insert into task(title,description) values (?,?)",[title,description])
    console.log(result)
    res.send({
        id: result.insertId,
        title,description
    })
}
export const updateTask=(req,res)=>{
    res.send("Actualizando tarea");
}
export const deleteTask=(req,res)=>{
    res.send("Eliminando tarea");
}

