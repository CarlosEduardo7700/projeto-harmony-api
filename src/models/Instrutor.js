import mongoose from "mongoose";

const instrutorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    dataDeNascimento: { type: Date, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    instrumento: { type: String, required: true },
    status: { type: String, required: true }
}, {versionKey: false});

const instrutor = mongoose.model("instrutores", instrutorSchema);

export { instrutor, instrutorSchema };