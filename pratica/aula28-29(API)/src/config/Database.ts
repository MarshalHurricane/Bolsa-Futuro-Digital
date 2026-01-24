import { createPool, Pool } from "mysql2/promise";


export const bd: Pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '12345', 
    database: 'Produtos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}) as any;