exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    knex('users').insert({id: 1, name: "surya",password:"su123",email:"surya.snath08@gmail.com"}),
    knex('users').insert({id: 2, name: "minu",password:"rteyey",email:"surya.snath08@gmail.com"})


);
};
    // Inserts seed entries
