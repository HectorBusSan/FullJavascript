import {createPool} from "mysql2/promise"
import { config } from "./configs.js"
export const pool = new createPool(config)

