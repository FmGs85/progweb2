import app from './src/index.js'
// import conexao from './src/app/database/index.js'


const port = 3000

// //realizando a connection
// conexao.connect((erro) => {
//     if (erro) {
//         console.log(`Falha ao conectar-se ao banco de dados: ${erro}`)
//     } else {
//         console.log("Conexão com Banco de Dados realizada com Sucesso")
//         // Escutando a porta    
        app.listen(port, () => {
            console.log(`Servidor rodando http://localhost:${port}`)
        })
//     }
// })

