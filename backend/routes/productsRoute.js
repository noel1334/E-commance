import express from "express";
import {
  addProduct,
  allProduct,
  filterProduct,
  getProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", allProduct);
router.get("/filter", filterProduct);
router.get("/:id", getProduct);
// router.put("/:id", )
// router.delete("/:id", )
router.post("/", addProduct);

export default router;
