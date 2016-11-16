import * as mongo from 'mongodb';
import config from './config';

const connect = () => mongo.MongoClient.connect(config.MONGO_URL);

async function findOne<T>(collectionName: string, query: Object): Promise<T | null> {
  const db = await connect();
  return db.collection(collectionName).findOne(query);
};

/*async function insert(collectionName: string, docs: Object) {
  const db = await connect();
  return db.collection(collectionName).insertOne(docs);
};*/

async function insertMany(collectionName: string, ...docs: Object[]) {
  const db = await connect();
  return db.collection(collectionName).insertMany(docs);
};

export default {
  findOne,
  // insert,
  connect,
  insertMany
};
