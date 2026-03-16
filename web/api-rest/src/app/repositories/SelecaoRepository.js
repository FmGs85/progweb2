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
        const sql = "SELECT * FROM selecoes"

        try {

            const resultado = await this.executarQuery(sql)
            return resultado

        } catch (erro) {

            throw new Error(erro)

        }


    }
// Métodos Extras!!
    async findByGrupo(grupo) {
    const sql = "SELECT * FROM selecoes WHERE grupo = ?"
    try {
        const resultado = await this.executarQuery(sql, [grupo])
        return resultado
    } catch (erro) {
        throw new Error(erro)
    }
}

async findByNome(nome) {
    const sql = "SELECT * FROM selecoes WHERE selecao LIKE ?"
    try {
        // O % significa "qualquer coisa antes ou depois"
        // Ex: %bra% encontra "Brasil"
        const resultado = await this.executarQuery(sql, [`%${nome}%`])
        return resultado
    } catch (erro) {
        throw new Error(erro)
    }
}

}

export default new SelecaoRepository()