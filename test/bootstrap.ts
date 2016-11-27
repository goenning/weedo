import { execute } from '../src/db';
import { exec } from 'child_process';

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

const promiseExec = (command: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    exec(command, resolve);
  });
};

before(async function () {
  this.timeout(5000);
  await promiseExec('npm run migrate-reset -- -e test');
  await promiseExec('npm run migrate-up -- -e test');

  const insertSite = `insert into sites (id, name, hostname, created_on, modified_on) 
                      values ($[id], $[name], $[hostname], now(), now())`;

  await [
    execute(insertSite, orangeSettings),
    execute(insertSite, theTriShopSettings)
  ];
});
