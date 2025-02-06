import mongoose from "mongoose";
import { instrutorSchema } from "./Instrutor.js";

const alunoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { 
        type: String, 
        required: [true, "O campo 'nome' é obrigatório"] 
    },
    dataDeNascimento: { 
        type: Date, 
        required: [true, "O campo 'dataDeNascimento' é obrigatório"]  
    },
    instrumento: { 
        type: String, 
        required: [true, "O campo 'instrumento' é obrigatório"]  
    },
    batismo: { 
        type: Boolean, 
        required: [true, "O campo 'batismo' é obrigatório"]  
    },
    faseAtual: { 
        type: String, 
        required: [true, "O campo 'faseAtual' é obrigatório"],
        enum: {
            values: ["Iniciando", "Ensaio GEM", "Ensaio", "RDJ", "Oficial"],
            message: "O valor {VALUE} não é uma fase válida"
        } 
    },
    observacoes: { type: String },
    instrutor: instrutorSchema,
    status: { 
        type: String, 
        required: [true, "O campo 'status' é obrigatório"]  
    }
}, {versionKey: false});

const aluno = mongoose.model("alunos", alunoSchema);

export { aluno, alunoSchema };