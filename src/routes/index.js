import express from "express";
import rotasDeAluno from "./alunoRoutes.js";
import rotasDeInstrutor from "./instrutorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Servidor rodando..."));

    app.use(express.json(), rotasDeAluno, rotasDeInstrutor);
};

export default routes;