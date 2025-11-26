// src/routes/Produto.routes.ts
import { Router } from "express";
import { 
    inserirProduto, 
    buscarProduto, 
    atualizarProduto, 
    deletarProduto 
} from "../controllers/Produto.controller";

const router = Router();

// CREATE - POST /produtos
router.post("/produtos", inserirProduto);

// GET - GET /produtos/:id (com parâmetro)
router.get("/produtos/:id", buscarProduto);

// UPDATE - PUT /produtos/:id
router.put("/produtos/:id", atualizarProduto);

// DELETE - DELETE /produtos/:id
router.delete("/produtos/:id", deletarProduto);

export default router;