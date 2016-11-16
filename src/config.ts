process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  process.env.DATABASE_URL = 'postgres://weedo:weedo-pw@localhost:5555/weedo';
} else if (process.env.NODE_ENV === 'test') {
  process.env.DATABASE_URL = 'postgres://weedo-test:weedo-test-pw@localhost:5556/weedo-test';
}

export default {
  DATABASE_URL: process.env.DATABASE_URL
};
