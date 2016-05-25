
exports.up = function(knex, Promise) {
console.log('create table')

  return knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id')
      table.string('name')
      table.string('password')
      table.string('email')
      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function () {
    console.log('users table were dropped')
  })
};
