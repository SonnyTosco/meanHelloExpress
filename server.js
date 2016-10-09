// load the express module (where do you think this comes from)
// Ask Brendan: It comes from node_modules after we install Express
var express = require("express");

// invoke var express and store the resulting application in var application
var app = express();
app.use(express.static(__dirname + "/static"));
console.log(__dirname);
//lets handle the base route '/' and respond with "Hello Express"
app.get('/', function(request, response){
  response.send("<h1>Hello Express</h1>");
})
//notice that the function is ap.get(...) why do you think the function is called get?
//Ask Brendan: It's because it's a get route

//Tell the express app to listen on port 8000
app.listen(8000, function(){
  console.log("listening on port 8000");
})
// this line will almost always be at the end of youor server.js file
//(we only tell the server to listen after we have set up all of our rules)
