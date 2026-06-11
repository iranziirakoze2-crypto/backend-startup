import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    productName:{
       type:String,
    required:[true,"please! this field is required"]
    },

    productPrice:{
        type:Number,
        required:[true,"please! this field is required"]
    },

     productDescription:{
        type:String,
        required:false
    }
   
})

const product = mongoose.model("products",productSchema)

export default product