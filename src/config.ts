import { join } from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const databases = require(join(process.cwd(), 'database.json'));
const connectionString = databases[process.env.NODE_ENV];

if (typeof connectionString === 'string') {
  process.env.DATABASE_URL = connectionString;
}

export default {
  DATABASE_URL: process.env.DATABASE_URL
};
