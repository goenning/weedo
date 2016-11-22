exports.up = function (db, done) {
  db.createTable('sites', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 80, notNull: true },
    hostname: { type: 'string', length: 120, notNull: true },
    created_on: { type: 'datetime', notNull: true },
    modified_on: { type: 'datetime', notNull: true }
  }, done);
};

exports.down = function (db, done) {
  db.dropTable('sites', done);
};
