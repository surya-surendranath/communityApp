module.exports = function(knex) {
  return {

    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    }
  }
}
