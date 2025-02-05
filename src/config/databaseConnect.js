import mongoose from "mongoose";

async function iniciarConexao() {
    mongoose.connect(process.env.DB_CONNECTION_URL);

    return mongoose.connection;
}

export default iniciarConexao;