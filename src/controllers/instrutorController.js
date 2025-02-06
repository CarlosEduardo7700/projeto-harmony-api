import NotFoundError from "../errors/NotFoundError.js";
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

    static async encontrarInstrutorPorId(req, res, next) {
        try {
            const instrutorEncontrado = await instrutor.findById(req.params.id);

            if (instrutorEncontrado !== null) {
                res.status(200).json(instrutorEncontrado);
            } else {
                next(new NotFoundError(`Instrutor de ID ${req.params.id} não encontrado!`));
            }

        } catch (error) {
            next(error);
        }
    }

    static async cadastrarInstrutor(req, res, next) {
        try {
            const instrutorCriado = await instrutor.create(req.body);
            res.status(201).json({
                message: "Instrutor cadastrado com sucesso!",
                instrutor: instrutorCriado
            });
        } catch (error) {
            next(error);
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

    static async buscarComFiltro(req, res, next) {
        try {

            const queryDeBusca = await gerarQueryDeBusca(req.query);

            const instrutorEncontrado = await instrutor.find(queryDeBusca);

            if (instrutorEncontrado.length !== 0) {
                res.status(200).json(instrutorEncontrado);
            } else {
                next(new NotFoundError("Instrutores não encontrados!"));
            }

        } catch (error) {
            next(error);
        }
    }

}

function gerarQueryDeBusca(parametros) {
    const { instrumento, status } = parametros;

    let busca = {};

    if (instrumento) busca.instrumento = { 
        $regex: instrumento, 
        $options: "i" 
    };

    if (status) busca.status = { 
        $regex: status, 
        $options: "i" 
    };

    return busca;

}

export default InstrutorController;