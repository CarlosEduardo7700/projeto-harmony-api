import { instrutor } from "../models/Instrutor.js";

class InstrutorController {

    static async listarInstrutor(req, res) {
        try {
            const listaDeInstrutores = await instrutor.find({});
            res.status(200).json(listaDeInstrutores);
        } catch (error) {
            res.status(500).json({
                message: `Erro na listagem: ${error}`
            });
        }
    }

    static async encontrarInstrutorPorId(req, res) {
        try {
            const instrutorEncontrado = await instrutor.findById(req.params.id);
            res.status(200).json(instrutorEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `Erro na busca: ${error}`
            });
        }
    }

    static async cadastrarInstrutor(req, res) {
        try {
            const instrutorCriado = await instrutor.create(req.body);
            res.status(201).json({
                message: "Instrutor cadastrado com sucesso!",
                instrutor: instrutorCriado
            });
        } catch (error) {
            res.status(500).json({
                message: `Erro ao cadastrar: ${error}`
            });
        }
    }

    static async atualizarInstrutor(req, res) {
        try {
            await instrutor.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Instrutor atualizado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                message: `Erro ao atualizar: ${error}`
            });
        }
    }

    static async deletarInstrutor(req, res) {
        try {
            await instrutor.findByIdAndDelete(req.params.id);
            res.status(204).json({
                message: "Instrutor deletado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                message: `Erro ao deletar: ${error}`
            });
        }
    }

    static async encontrarInstrutorPorInstrumento(req, res) {
        try {
            const instrutorEncontrado = await instrutor.find({ instrumento: req.query.instrumento });
            res.status(200).json(instrutorEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `Erro na busca: ${error}`
            });
        }
    }

}

export default InstrutorController;