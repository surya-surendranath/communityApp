var express=require('express');
var app = express();
var fs = require('fs');

user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})
app.get('/deleteUser', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		data= JSON.parse(data);
		delete data["user" + 2];
		res.end(JSON.stringify(data));
	});
})

app.get('/updateUser', function(req, res){
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
		data= JSON.parse(data);

		console.log(data)
		data.user1.name="mohini";
		
		res.end(JSON.stringify(data));
	});
})

app.get('/listUsers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
		console.log(data);
		res.end(data);
	});
})
app.get('/addUser', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

	server =app.listen(8081, function() {

		var host = server.address().address
		var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})