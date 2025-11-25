import mysql from "mysql2/promise"

export const bd = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'Produtos',
})