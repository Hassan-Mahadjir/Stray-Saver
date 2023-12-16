import mysql from "mysql2/promise"
import dbconfig from "./dbconfig.json" assert {type:"json"}

const pool = mysql.createPool(dbconfig)

export const connection = await  pool.getConnection()