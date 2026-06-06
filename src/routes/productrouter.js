import { Router } from "express";
import createProduct from "../controller/productcontroller.js";

const router = Router();

router.post("/createproduct",createProduct)

export default router;

