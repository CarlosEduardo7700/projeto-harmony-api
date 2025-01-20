import express from "express"
import AlunoController from "../controllers/alunoController.js"

const routes = express.Router()

routes.get("/alunos", AlunoController.listarAlunos)
routes.post("/alunos", AlunoController.cadastrarAluno)
routes.get("/alunos/:id", AlunoController.encontrarAlunoPorId)
routes.put("/alunos/:id", AlunoController.atualizarAluno)
routes.delete("/alunos/:id", AlunoController.deletarAluno)

export default routes

