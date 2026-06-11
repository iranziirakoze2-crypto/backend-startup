import { Router } from "express";
import {createProduct,findproductByIdAndDelete,getAllProducts,getproductById, patchProduct, updateProduct}from "../controller/productcontroller.js";

const productRouter= Router();

productRouter.post("/createproduct",createProduct)
productRouter.get("/getproductbyid/:id",getproductById)
productRouter.delete("/delete-product/:id",findproductByIdAndDelete)
productRouter.get("/getallproducts",getAllProducts)
productRouter.put("/updateproduct/:id",updateProduct)
productRouter.patch("/patchproduct/:id",patchProduct)

export default productRouter;

