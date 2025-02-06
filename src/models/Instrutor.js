import mongoose from "mongoose";

const instrutorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { 
        type: String, 
        required: [true, "O campo 'nome' é obrigatório"]  
    },
    dataDeNascimento: { 
        type: Date, 
        required: [true, "O campo 'dataDeNascimento' é obrigatório"]  
    },
    email: { 
        type: String, 
        required: [true, "O campo 'email' é obrigatório"]  
    },
    senha: { 
        type: String, 
        required: [true, "O campo 'senha' é obrigatório"]  
    },
    instrumento: { 
        type: String, 
        required: [true, "O campo 'instrumento' é obrigatório"]  
    },
    status: { 
        type: String, 
        required: [true, "O campo 'status' é obrigatório"]  
    }
}, {versionKey: false});

const instrutor = mongoose.model("instrutores", instrutorSchema);

export { instrutor, instrutorSchema };