## Prerequisites
- Postgres database configured (v14+) to download the installer click [here](https://www.postgresql.org/download/)
- Install node.js (LTS o v16+)  to download the installer click [here](https://nodejs.org/en/download/)

## How to work in dev mode?

1. copy `.env.example` as `.env` and customize variables according to environment variables section.
2. run `npm install` at root level.
3. run pending migration scripts executing the following command `npm run migration:run`.
3. run `npm run start`.

## Environment variables in use:

- PORT: indicates in which port the app should run.
- DB_USERNAME: indicates the user name of the data base you are using.
- DB_PASSWORD: indicates the password of the data base you are using.
- DB_NAME: indicates the name of the data base you are using.
- DB_HOSTNAME: indicates the host of the data base you are using.
- DB_PORT: indicates the port of the data base you are using.
- DB_MIGRATION_STORAGE_TABLE_NAME: indicates the name of the migration table.
- ALLOWED_ORIGINS: indicates the origins allowed to consume the API.

## How to auto-format your code

1. run `npm run install` at root level
2. run `npm run format:fix`

## How to check lint issues

1. run `npm run install` at root level
2. run `npm run lint`

## How to run tests

1. run `npm run install` at root level
2. run `npm run test`