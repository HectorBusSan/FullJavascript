import { pool } from "../db.js";

export const getTasks=async(req,res)=>{
    try{
        const [result]=await pool.query("Select * from task order by createdAt");
        res.json(result);
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}
export const getTask=async(req,res)=>{
    try{
        const id=req.params.id;
        const [result] = await pool.query("Select * from task where id=?",id);
        if(result.length===0) return res.status(404).json({message:"Task not found"})
        console.log(result[0]);
        res.json(result[0]);
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}
export const createTask=async(req,res)=>{
    try{
        const {title,description} = req.body;
        const [result] = await pool.query("Insert into task(title,description) values (?,?)",[title,description])
        console.log(result)
        res.send({
            id: result.insertId,
            title,description
        })
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}
export const updateTask= async(req,res)=>{
    try{
        const [result]=await pool.query("Update task set ? where id=?", [
            req.body,req.params.id
        ]);
        if(result.affectedRows===0) return res.status(404).json({message:"task not found"})
        res.json(result);
    }catch(err){
        res.status(500).json({message:err.message});
    }

}
export const deleteTask=async(req,res)=>{
    try{
        const [result]=await pool.query("Delete from task where id=?",req.params.id);
        console.log(result)
        if(result.affectedRows===0)return res.status(404).json({message:"task not found"})
        res.sendStatus(204);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}