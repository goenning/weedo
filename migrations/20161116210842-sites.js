exports.up = function (db, done) {
  db.createTable('sites', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 80 },
    hostname: { type: 'string', length: 120 },
    created_on: 'datetime',
    modified_on: 'datetime'
  }, done);
  done();
};

exports.down = function (db, done) {
  db.dropTable('sites', done);
};