import { aluno, instrutor } from "../models/index.js";

class AlunoController {

    static async listarAlunos(req, res) {
        try {
            const listaDeAlunos = await aluno.find({});
            res.status(200).json(listaDeAlunos);
        } catch (error) {
            res.status(500).json({
                message: `Erro na listagem: ${error}`
            });
        }
    }

    static async encontrarAlunoPorId(req, res) {
        try {
            const alunoEncontrado = await aluno.findById(req.params.id);
            res.status(200).json(alunoEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `Erro na busca: ${error}`
            });
        }
    }

    static async cadastrarAluno(req, res, next) {
        try {
            const instrutorEncontrado = await instrutor.findById(req.body.instrutor);
            const novoAluno = { ...req.body, instrutor: { ...instrutorEncontrado } };
            const alunoCriado = await aluno.create(novoAluno);
            res.status(201).json({
                message: "Aluno cadastrado com sucesso!",
                aluno: alunoCriado
            });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarAluno(req, res) {
        try {
            await aluno.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Aluno atualizado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                message: `Erro ao atualizar: ${error}`
            });
        }
    }

    static async deletarAluno(req, res) {
        try {
            await aluno.findByIdAndDelete(req.params.id);
            res.status(204).json({
                message: "Aluno deletado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                message: `Erro ao deletar: ${error}`
            });
        }
    }

}

export default AlunoController;