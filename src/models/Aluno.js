import mongoose from "mongoose";
import { instrutorSchema } from "./Instrutor.js";

const alunoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    dataDeNascimento: { type: Date, required: true },
    instrumento: { type: String, required: true },
    batismo: { type: Boolean, required: true },
    faseAtual: { type: String, required: true },
    observacoes: { type: String },
    instrutor: instrutorSchema,
    status: { type: String, required: true }
}, {versionKey: false});

const aluno = mongoose.model("alunos", alunoSchema);

export { aluno, alunoSchema };