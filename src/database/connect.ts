import knex from 'knex'

interface ConnectProps {
    client: string
    connection: {
        host: string
        user: string
        password: string
        database: string
        connectionTimeout: number
        requestTimeout: number
    }
}

export function connect(config: ConnectProps) {
    return knex(config)
}
