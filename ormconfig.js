const ormConfigDevelopment = {
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": "docker",
  "password": "reactmon",
  "database": "reactmon",
  "entities": [
    "./src/modules/**/models/*.ts"
  ],
  "migrations": ['./src/database/migrations/postgres/*.ts'],
  "cli": {
    "migrationsDir": './src/database/migrations/postgres'
  }
}

const ormConfigProduction = {
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "entities": [
    "./src/modules/**/models/*.ts"
  ],
  "migrations": [
    './src/database/migrations/sqlite/*.ts'
  ],
  "cli": {
    "migrationsDir": './src/database/migrations/sqlite'
  }
}

module.exports = process.env.API_ENVIRONMENT === 'developmentt' ? ormConfigDevelopment : ormConfigProduction;
