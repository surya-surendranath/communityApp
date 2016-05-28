exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('events').del(),

    knex('events').insert({id: 1, name: "event1", Date: "2/3/2015", Starttime: "1:30",Endtime: "2:30", description: "I love podcasts, exercise, scifi, surfing and code! I'm a 1,2,3 type of guy."}),
    knex('events').insert({id: 2, name: "event2", Date: "2/3/2015", Starttime: "1:30",Endtime: "2:30", description: "I hate podcasts, exercise, scifi, surfing and code! I'm a 1,2,3 type of guy."})


);
};


<table style="width:100%">
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>

    // Inserts seed entries
