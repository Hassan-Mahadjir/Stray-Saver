import {connection} from "./dbconnection.js";

console.log("1")
const res = await connection.execute("select 1+1")
console.log(res)

