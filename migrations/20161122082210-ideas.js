exports.up = function (db, done) {
  db.createTable('ideas', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    site_id: { 
      type: 'int', 
      unsigned: true, 
      notNull: true,
      foreignKey: {
        name: 'fk_ideas_sites',
        table: 'sites',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          site_id: 'id'
        }
      }
    },
    idea: { type: 'string', length: 200, notNull: true },
    votes: { type: 'int', unsigned: true, notNull: true },
    created_on: { type: 'datetime', notNull: true },
    modified_on: { type: 'datetime', notNull: true }
  }, done);
};

exports.down = function (db, done) {
  db.dropTable('ideas', done);
};
