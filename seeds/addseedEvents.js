exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(),

    // Inserts seed entries
    knex('events').insert({id: 1, name: "event1", Date: "2/3/2015", Starttime: "1:30",Endtime: "2:30", description: "I love podcasts, exercise, scifi, surfing and code! I'm a 1,2,3 type of guy."})

);
};
