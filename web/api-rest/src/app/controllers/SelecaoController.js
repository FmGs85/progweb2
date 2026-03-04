import conexao from "../database/index.js"

class SelecaoController {

    async executarQuery(sql, valores = []) {
        try {
            const [rows] = await conexao.query(sql, valores)
            return rows
        } catch (erro) {
            console.error('Erro na query:', erro)
            throw erro
        }
    }

    //Listar tudo
    async index(req, res) {
        const sql = "SELECT * FROM dbselecao.dbcopa"
        try {

            const resultado = await this.executarQuery(sql)
            res.status(200).json(resultado)

        } catch (erro) {

            res.status(500).json({ erro: "Erro ao buscar seleções" })

        }

    }

    // Listar por id
    async show(req, res) {

        const id = req.params.id
        const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?"

        try {
            const resultado = await this.executarQuery(sql, [id])
            res.status(200).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao encontrar seleção" })

        }
    }

    // Criar dados
    async store(req, res) {
        const params = req.body
        const sql = "INSERT INTO dbselecao.dbcopa SET ?;"

        try {
            const resultado = await this.executarQuery(sql, [params])
            res.status(201).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao inserir seleção" })
        }


    }


    // Atualizar dados
    async update(req, res) {
        const id = req.params.id
        const params = req.body
        const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id = ?;"
        try {
            const resultado = await this.executarQuery(sql, [params, id])
            res.status(201).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao atualizar seleção" })
        }



    }

    // Deletar dados
    async delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?"
        try {
            const resultado = await this.executarQuery(sql, [id])
            res.status(201).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao deletar seleção" })
        }
    }

}
// Padrão singleton
export default new SelecaoController()