class GenericError extends Error {
    constructor(message = "Um erro desconhecido ocorreu!", status = 500) {
        super();
        this.message = message;
        this.status = status;
    }

    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status
        });

    }
}

export default GenericError;