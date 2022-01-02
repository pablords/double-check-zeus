declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: string
      MATRICULA: string
      SENHA: string
      MATRICULA_ALTERNATIVA: string
      SENHA_ALTERNATIVA: string
      NODE_ENV: 'DEV' | 'PROD' | 'TEST'
      PUPPETER_ENV: 'CONTAINER' | 'LOCAL'
      SERVER_PORT?: number
      SERVER_HOST: string
      DB_ENGINE: 'mysql' | 'pg' | 'sqlite3' | 'mysql2'
      DB_HOST: string
      DB_PORT: number
      DB_USER: string
      DB_DATABASE: string
      DB_PASSWORD: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }