import { pool } from "../db.js";

export const getTasks=async(req,res)=>{
    const [result]=await pool.query("Select * from task order by createdAt");
    res.json(result)
}
export const getTask=async(req,res)=>{
    const id=req.params.id;
    const [result] = await pool.query("Select * from task where id=?",id);
    console.log(result);
    res.json(result);
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

