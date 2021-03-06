const pgp = require('pg-promise');
import config from './config';

export const db = pgp()(config.DATABASE_URL);

export function manyOrNone<T>(query: string, values?: any): Promise<T[]> {
  return db.manyOrNone(query, values);
}

export function oneOrNone<T>(query: string, values?: any): Promise<T | null> {
  return db.oneOrNone(query, values);
}

export function execute(query: string, values?: any): Promise<void> {
  return db.query(query, values);
}
