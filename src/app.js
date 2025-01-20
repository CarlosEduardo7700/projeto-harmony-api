import express from 'express'
import iniciarConexao from './config/databaseConnect.js'
import routes from './routes/index.js'

const conexao = await iniciarConexao()

conexao.on("error", (error) => {
    console.log("Um erro ocorreu ao tentar conexão com o banco de dados: ", error)
})

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!")
})

const app = express()
routes(app)

export default app