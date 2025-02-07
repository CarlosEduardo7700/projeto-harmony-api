import express from "express";
import InstrutorController from "../controllers/instrutorController.js";
import pagination from "../middleware/pagination.js";

const routes = express.Router();

routes.get("/instrutores", InstrutorController.listarInstrutor, pagination);
routes.get("/instrutores/buscar-por", InstrutorController.buscarComFiltro, pagination);
routes.get("/instrutores/:id", InstrutorController.encontrarInstrutorPorId);
routes.post("/instrutores", InstrutorController.cadastrarInstrutor);
routes.put("/instrutores/:id", InstrutorController.atualizarInstrutor);
routes.delete("/instrutores/:id", InstrutorController.deletarInstrutor);

export default routes;

