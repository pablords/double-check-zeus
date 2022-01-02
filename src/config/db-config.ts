import 'dotenv/config'

export default {
    client: process.env.DB_ENGINE,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionTimeout: 30000,
        requestTimeout: 30000
    }
}