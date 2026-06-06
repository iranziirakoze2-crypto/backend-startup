import product from "../models/products.js"


const createProduct=async(req,res)=>{
 

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

export default createProduct