var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)
var model = require('../lib/model') (knex)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Wellington Indian Community' });
});

router.get('/new-user', function(req, res, next) {
  res.redirect('newuser', { title: 'Wellington Indian Community' });
});

 router.post('/', function(req, res, next) {
 db.addNew('users',req.body, function(err,data){
  res.render('newuser',{});
 })
 
});
router.post('/people', function(req, res, next) {

  db.getAll('userInfo', function(err, data) {
   
 res.render('people',{name:data})
})
});



router.post('/newuser', function(req, res, next) {

  model.login(req.body.name, req.body.password)
  .then(function (user) {
    db.getAllSort('userInfo', function(err, data) {
      
    res.render('main',{user:req.body.name,name:data});
  })
})

  .catch(function(err) {
    res.render('newuser',{message:''})
  })

});
 router.post('/main', function(req, res, next) {


 

  db.getAllSort('userInfo', function(err, data) {
    db.findOne('userInfo', {first_name:req.body.first_name}, function(err, info){
      db.addNew('userInfo',{first_name:req.body.first_name,birth_place:req.body.birth_place,image:info.image,last_name:info.last_name,current_location:info.current_location}, function(err,data){
    console.log(req.body,"jdfhdj")
     console.log(req.body.first_name,"sdjfhdskj")
       console.log(info,"sdjfhdskj")
        console.log(info.image,"sdjfhdskj")
        db.getAllSort('userInfo', function(err, data) {
 res.render('main',{name:data,user:req.body.first_name,infos:info.image})
}) 
});
})
  })
})
module.exports = router;

 router.get('/:id', function(req, res, next) {

  db.getAll('events', function(err, data) {
 res.render('',{Events:data})

 router.get('/new-user', function(req, res, next) {
  res.redirect('newuser', { title: 'Wellington Indian Community' });
});

 router.post('/new-user', function(req, res, next) {
  res.render('newuser', { title: 'Wellington Indian Community' });
});


















































 ;
 })
 });
