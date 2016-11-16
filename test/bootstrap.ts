import db from '../src/db';

export const orangeSettings = {
  name: 'Orange Inc.',
  hostname: 'orange',
  color: 'orange'
};

export const theTriShopSettings = {
  name: 'TRI Shop',
  hostname: 'feedback.thetrishop.com',
  color: 'red'
};

beforeEach(async () => {
  const conn = await db.connect();
  await conn.dropDatabase();
  return await db.insertMany('sites', orangeSettings, theTriShopSettings);
});
