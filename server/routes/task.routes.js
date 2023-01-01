import { Router } from "express";
import {
    getTask,
    getTasks,
    createTask,
    deleteTask,
    updateTask
} from "../controllers/task.controllers";
const router = Router();
router.get("/task",getTasks)
router.post("/task",createTask)
router.put("/task/:id",updateTask)
router.get("/task/:id",getTask)
router.delete("/task/:id",deleteTask)
export default router