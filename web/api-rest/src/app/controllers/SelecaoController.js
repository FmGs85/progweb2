import conexao from "../database/index.js"
import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {

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

    //Listar tudo
    async index(req, res) {
        try{
        const row = await SelecaoRepository.findAll();
        res.status(200).json(row)
        } catch(erro){
            res.status(500).json({erro:"Erro ao encontrar seleção"})
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

// Métodos Extras!!    
     async showByGrupo(req, res) {
        const grupo = req.params.grupo
        try {
            const resultado = await SelecaoRepository.findByGrupo(grupo)
            res.status(200).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao buscar seleções por grupo" })
        }
    }

    async showByNome(req, res) {
        const nome = req.query.nome
        try {
            const resultado = await SelecaoRepository.findByNome(nome)
            res.status(200).json(resultado)
        } catch (erro) {
            console.log(erro)
            res.status(500).json({ erro: "Erro ao buscar seleção por nome" })
        }
    }
}




// Padrão singleton
export default new SelecaoController()