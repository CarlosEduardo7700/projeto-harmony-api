import GenericError from "./GenericError.js";

class FieldValidationError extends GenericError {
    constructor(error) {
        var errorsMessage = Object.values(error.errors)
            .map(erro => erro.message)
            .join("; ");

        super(`Erro de validação: ${errorsMessage}`, 400);
    }
}

export default FieldValidationError;