import GenericError from "./GenericError.js";

class NotFoundError extends GenericError {
    constructor(message = "Não encontrado!") {
        super(message, 404);
    }
}

export default NotFoundError;