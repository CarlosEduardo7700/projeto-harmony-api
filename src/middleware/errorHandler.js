import GenericError from "../errors/GenericError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
    new GenericError().sendResponse(res);
}
export default errorHandler;