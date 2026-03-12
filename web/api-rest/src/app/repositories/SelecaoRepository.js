import conexao from "../database/index.js"

class SelecaoRepository {

    // função helper
    async executarQuery(sql, valores = []) {
        try {
            const [rows] = await conexao.query(sql, valores)
            return rows
        } catch (erro) {
            console.error('Erro na query:', erro)
            throw erro
        }
    }

    async findAll() {
        const sql = "SELECT * FROM dbselecao.dbcopa"

        try {

            const resultado = await this.executarQuery(sql)
            return resultado

        } catch (erro) {

            throw new Error(erro)

        }


    }

}

export default new SelecaoRepository()