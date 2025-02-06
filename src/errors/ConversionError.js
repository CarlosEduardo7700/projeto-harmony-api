import GenericError from "./GenericError.js";

class ConversionError extends GenericError {
    constructor(message = "Os dados fornecidos estão incorretos!") {
        super(message, 400);
    }
}

export default ConversionError;