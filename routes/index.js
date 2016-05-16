var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wellington Indian Community' });
});

module.exports = router;

 router.get('/:id', function(req, res, next) {
  db.getAll('events', function(err, data) {
 res.render('eventview',{Events:data});
 })
 });
