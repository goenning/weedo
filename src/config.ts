process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  process.env.MONGO_URL = 'mongodb://localhost:27020/weedo-dev';
} else if (process.env.NODE_ENV === 'test') {
  process.env.MONGO_URL = 'mongodb://localhost:27021/weedo-test';
}

export default {
  MONGO_URL: process.env.MONGO_URL
};
