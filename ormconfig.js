const ormConfigDevelopment = {
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": "docker",
  "password": "reactmon",
  "database": "reactmon",
  "entities": [
    `./${process.env.ORM_CONFIG_URL}/modules/**/models/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "migrations": [
    `./${process.env.ORM_CONFIG_URL}/database/migrations/postgres/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "cli": {
    "migrationsDir": './src/database/migrations/postgres'
  }
}

const ormConfigProduction = {
  "type": "sqlite",
  "database": "./src/database/database.sqlite",
  "entities": [
    `./${process.env.ORM_CONFIG_URL}/modules/**/models/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "migrations": [
    `./${process.env.ORM_CONFIG_URL}/database/migrations/sqlite/*.${process.env.ORM_CONFIG_EXTENSION}`
  ],
  "cli": {
    "migrationsDir": './src/database/migrations/sqlite'
  }
}

module.exports = process.env.API_ENVIRONMENT !== 'development' ? ormConfigDevelopment : ormConfigProduction;
