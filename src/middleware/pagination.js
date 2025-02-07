import ConversionError from "../errors/ConversionError.js";

async function pagination(req, res, next) {
    try {
        var { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

        let [ campoDeOrdenacao, ordem ] = ordenacao.split(":");

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);

        const resultado = req.resultado;

        if (limite > 0 && pagina > 0) {
            const lista = await resultado.find({})
                .sort({[campoDeOrdenacao]: ordem})
                .skip((pagina - 1) * limite)
                .limit(limite);
            res.status(200).json(lista);
        } else {
            next(new ConversionError());
        }

    } catch (error) {
        next(error);
    }
}

export default pagination;