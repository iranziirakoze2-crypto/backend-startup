import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import mainRouter from "./routes/indexrouting.js";


dotenv.config();

const server = express();
 server.use(express.json());
const database = process.env.DATABASE_SPECIFICATION;

const port = process.env.PORT;

server.use("/api/v1",mainRouter)

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
mongoose.connect(database)

.then(()=>{
    console.log(`Database is connected successfully`)
    
})