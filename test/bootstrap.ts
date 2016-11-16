import { execute } from '../src/db';
import { execSync } from 'child_process';

export const orangeSettings = {
  id: 1,
  name: 'Orange Inc.',
  hostname: 'orange'
};

export const theTriShopSettings = {
  id: 2,
  name: 'TRI Shop',
  hostname: 'feedback.thetrishop.com'
};

before(async () => {
  await execute('drop schema public cascade; create schema public;');
  execSync('npm run migrate-up -- -e test');

  const insertSite = `insert into sites (id, name, hostname, created_on, modified_on) 
                      values ($[id], $[name], $[hostname], now(), now())`;
  await [
    execute(insertSite, orangeSettings),
    execute(insertSite, theTriShopSettings)
  ];
});
