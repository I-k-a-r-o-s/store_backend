import Product from "../models/product.model.js"

//create product
export const createProduct = async (req, res) => {
    try {
        const {name,price,image}=req.body
        if(!name || !price || !image){
            return res.status(400).json({message:"All fields are required"})
        }
        const product=await Product.create({name,price,image})
        res.status(201).json({message:"Product created successfully",product})
    } catch (error) {
        res.status(500).json({message:"Server Error",error:error.message})
    }
}