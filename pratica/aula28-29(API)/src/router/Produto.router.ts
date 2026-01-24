import { Router } from "express";
import { ProdutoController } from "../controller/Produto.controller";

const router = Router();
const controller = new ProdutoController();

router.post("/produtos", controller.cadastrar);
router.get("/produtos", controller.listar);
router.get("/produtos/:id", controller.buscarPorId);
router.put("/produtos/:id", controller.atualizar);
router.delete("/produtos/:id", controller.deletar);

export default router;