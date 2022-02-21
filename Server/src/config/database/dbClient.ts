import { Connection, createConnection } from 'typeorm';

export async function connectToDatabase(): Promise<Connection> {
  const connection = await createConnection();

  return connection;
}
