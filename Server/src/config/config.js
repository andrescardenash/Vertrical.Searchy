require('dotenv').config();

const configuration = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "migrationStorageTableName": process.env.DB_MIGRATION_STORAGE_TABLE_NAME,
    "host": process.env.DB_HOSTNAME,
    "dialect": "postgres"
  }

module.exports = configuration