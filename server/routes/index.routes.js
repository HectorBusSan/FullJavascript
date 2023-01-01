import { Router } from "express";
import { pool } from "../db.js";
const router = Router();

router.get("/ping",async(req,res)=>{
    const result = await pool.query("Select 1 + 1 as result");
    console.log(result)
    res.json("ping");
})

export default router;
