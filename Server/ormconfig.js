import dotenv from 'dotenv';

dotenv.config();

const defaultConnection = {
  type: 'postgres',
  schema: 'public',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  migrationsTableName: process.env.DB_MIGRATION_STORAGE_TABLE_NAME,
  entities: ['src/**/models/**/*{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
  },
  ssl: false,
};

module.exports = [
  {
    name: 'owner',
    ...defaultConnection,
  },
  defaultConnection,
];
