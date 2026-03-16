import mysql from 'mysql2/promise'

const conexao = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'copa_mundo'
})

export default conexao