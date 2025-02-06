import mongoose from "mongoose";
import GenericError from "../errors/GenericError.js";
import NotFoundError from "../errors/NotFoundError.js";
import ConversionError from "../errors/ConversionError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {

    if (error instanceof NotFoundError) {
        new NotFoundError(error.message).sendResponse(res);
    } else if (error instanceof mongoose.Error.CastError) {
        new ConversionError().sendResponse(res);
    } else {
        new GenericError().sendResponse(res);
    }
    
}
export default errorHandler;