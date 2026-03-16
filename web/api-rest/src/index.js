//Uma das formas de importar (commomJS)
// const express = require('express')
// app = express()

//Forma ECMAScript de importar
import express, { response } from 'express'
import conexao from './app/database/index.js'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

//foi para o server.js
// const port = 3000

// Criando uma rota padrão (ou raiz) 
//get é uma property que permite definir uma rota
//Sempre vai receber uma requisição (req) e devolver uma response (res)
app.get('/', (req, res) => {
    res.send('<h1>Hello world!!</h1>')

})

// Indicar para o express ler o body como json

app.use(express.json())

// Mock para passar no send da rota selecoes
// const selecoes = [
//     {
//         id: 1,
//         selecao: "Brasil",
//         grupo: "C"
//     },
//     {
//         id: 2,
//         selecao: "EUA",
//         grupo: "A"
//     },
//     {
//         id: 3,
//         selecao: "Canada",
//         grupo: "B"
//     }
// ]

async function executarQuery(sql, valores = []) {
    try {
        const [rows] = await conexao.query(sql, valores)
        return rows
    } catch (erro) {
        console.error('Erro na query:', erro)
        throw erro
    }
}




// function findByIndex(index) {
//     return selecoes.find(selecao => selecao.id == index)
// }

// function buscarSelecaoPorId(index){
//     return selecoes.filter(selecao => selecao.id == index)
// }

// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

app.get('/selecoes', (req,res) => SelecaoController.index(req,res))
    //async (req, res) => {

//     // res.status(200).send(selecoes)
//     const sql = "SELECT * FROM dbselecao.dbcopa"
//     // conexao.query(sql, (erro, resultado) =>{
//     //     if(erro){
//     //         console.log(erro)
//     //         return res.status(500).json({erro: "Erro ao encontrar seleção"})
//     //         // TODO: status 404
//     //     } else {
//     //         res.status(200).json(resultado)
//     //     }
//     // })
//     try {

//         const resultado = await executarQuery(sql)
//         res.status(200).json(resultado)

//     } catch (erro) {

//         res.status(500).json({ erro: "Erro ao buscar seleções" })

//     }
// })



// Rotas novas para os métodos extras
app.get('/selecoes/grupo/:grupo', (req, res) => SelecaoController.showByGrupo(req, res))
app.get('/selecoes/busca', (req, res) => SelecaoController.showByNome(req, res))


app.get('/selecoes/:id', (req,res) => SelecaoController.show(req,res))
    // async (req, res) => {
    // res.json(findByIndex(req.params.id))

//     const id = req.params.id
//     const sql = "SELECT * FROM dbselecao.dbcopa WHERE id=?"
//     // .query(query, parâmetro, arrow function com resultado)
//     // conexao.query(sql, id, (erro, resultado) => {
//     //     if (erro){
//     //         console.log(erro)
//     //         return res.status(500).json({erro: "Erro ao encontrar seleção"})
//     //     } else {
//     //         res.status(200).json(resultado)
//     //     }
//     // })
//     try {
//         const resultado = await executarQuery(sql, [id])
//         res.status(200).json(resultado)
//     } catch (erro) {
//         console.log(erro)

//     }
// })

app.post('/selecoes',  (req,res) => SelecaoController.store(req,res))
    // async (req, res) => {
//     // selecoes.push(req.body)
//     // res.status(200).send("Seleção cadastrada com sucesso!")
//     const params = req.body
//     const sql = "INSERT INTO dbselecao.dbcopa SET ?;"
//     // .query(query, parâmetro, arrow function com resultado)
//     // conexao.query(sql, params, (erro, resultado) => {
//     //     if (erro) {
//     //         console.log(erro)
//     //         return res.status(500).json({ erro: "Erro ao inserir seleção" })
//     //     } else {
//     //         res.status(201).json(resultado)
//     //     }
//     // })
//     try {
//         const resultado = await executarQuery(sql, [params])
//         res.status(201).json(resultado)
//     } catch (erro) {
//         console.log(erro)
//         res.status(500).json({ erro: "Erro ao inserir seleção" })
//     }


// })

app.delete('/selecoes/:id', (req,res) => SelecaoController.delete(req,res))
//      (req, res) => {
//     // let index = selecoes.findIndex(selecao => selecao.id == req.params.id)

//     // if (index === -1) {
//     //     return res.status(404).send('Seleção não encontrada')
//     // }

//     // if (index !== -1) {
//     //     selecoes.splice(index, 1)
//     // }
//     // res.send("Seleção deletada com sucesso!!")
//     const id = req.params.id
//     const sql = "DELETE FROM dbselecao.dbcopa WHERE id=?"
//     // .query(query, parâmetro, arrow function com resultado)
//     conexao.query(sql, id, (erro, resultado) => {
//         if (erro) {
//             console.log(erro)
//             return res.status(500).json({ erro: "Erro ao deletar seleção" })
//         } else {
//             res.status(204).json(resultado)
//         }
//     })

// })

app.put('/selecoes/:id', (req,res) => SelecaoController.update(req,res))
    // (req, res) => {
    // let index = selecoes.findIndex(selecao => selecao.id == req.params.id)
    // let dados = req.body

    // if (index === -1) {
    //     return res.status(404).send('Seleção não encontrada')
    // }


    // selecoes[index] = {
    //     ...selecoes[index],
    //     ...dados,
    //     id:req.params.id,
    // }

    // res.send("Seleção alterada com sucesso!!").status(200).json(selecoes[index])
    // const id = req.params.id
    // const params = req.body
    // const sql = "UPDATE dbselecao.dbcopa SET ? WHERE id = ?;"
    // // .query(query, parâmetro, arrow function com resultado)
    // conexao.query(sql, [params, id], (erro, resultado) => {
    //     if (erro) {
    //         console.log(erro)
    //         return res.status(500).json({ erro: "Erro ao atualizar seleção" })
    //     } else {
    //         res.status(201).json(resultado)
    //     }
    // })


// })


//Escutando a porta
// foi para o server.js
// app.listen(port, () => {
//     console.log(`Servidor rodando http://localhost:${port}`)
// })


export default app