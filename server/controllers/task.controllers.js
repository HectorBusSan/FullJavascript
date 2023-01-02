import { pool } from "../db.js";

export const getTasks=async(req,res)=>{
    const [result]=await pool.query("Select * from task order by createdAt");
    res.json(result)
}
export const getTask=async(req,res)=>{
    const id=req.params.id;
    const [result] = await pool.query("Select * from task where id=?",id);
    if(result.length===0) return res.status(404).json({message:"Task not found"})
    console.log(result[0]);
    res.json(result[0]);
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
export const deleteTask=async(req,res)=>{
    const [result]=await pool.query("Delete from task where id=?",req.params.id);
    console.log(result)
    if(result.affectedRows===0)return res.status(404).json({message:"task not found"})
    res.sendStatus(204);
}

