import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/create", createProduct);
productRouter.get("/products", getAllProducts);
productRouter.patch("/update/:id", updateProduct);
producctRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
