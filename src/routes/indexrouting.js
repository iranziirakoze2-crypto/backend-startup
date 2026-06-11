import { Router } from "express";
import userRouter from "./userrouter.js";
import productRouter from "./productrouter.js";




const mainRouter=Router();
mainRouter.use("/productrouter",productRouter)
mainRouter.use("/userrouter",userRouter)

export default mainRouter