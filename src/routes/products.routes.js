import { Router } from "express";
import ProductsController from "../controllers/products.controller.js";

const router = Router();
const controller = new ProductsController();

router.get("/products", controller.getProducts.bind(controller));

export { router };