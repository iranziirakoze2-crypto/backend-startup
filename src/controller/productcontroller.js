import product from "../models/products.js"


export const createProduct=async(req,res)=>{
 

    try {
        const{productName,productPrice,productDescription} = req.body
    const newproduct = await product.create({
        productName,
        productPrice,
        productDescription
    })
     return res.status(201).json({status:201,message:"product created successfully",newproduct})
    } catch (error) {
        return res.status(500).json({status:500,message:error.messsage})
        
    }
}


 export const getproductById= async(req,res)=>{
    try {
        const {id}= req.params;
        const oneProduct= await product.findById(id);
        if(!oneProduct){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"product retrieved successfully",oneProduct})
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})
    }
}


export const findproductByIdAndDelete= async(req,res)=>{
    try {
        const {id}= req.params;
        const deleteoneProduct= await product.findByIdAndDelete(id);
        if(!deleteoneProduct){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:"product retrieved successfully",deleteoneProduct})
    } catch (error) {
        res.status(500).json({message:"Server error",error:error.message})
    }
}


export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await product.find();
        // Fixed: Added the curly braces around the response object
        return res.status(200).json({ message: "you asked all products", allProducts });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id; 
        const updatedData = req.body;

        // FIX: Remove the outer curly braces. Just use commas!
        const updatedProduct = await product.findByIdAndUpdate(
            id, 
            updatedData, 
            { new: true } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Updated successfully", updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



// PARTIAL UPDATE A PRODUCT (PATCH)
export const patchProduct = async (req, res) => {
    try {
        const id = req.params.id;         // Who to look for
        const partialData = req.body;     // Only the specific fields to change

        // Mongoose updates ONLY the fields present inside partialData
        const updatedProduct = await product.findByIdAndUpdate(
            id, 
            partialData, 
            { new: true } // Still returns the fresh version
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Patched successfully", updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};