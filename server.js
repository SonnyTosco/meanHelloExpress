// load the express module (where do you think this comes from)
// Ask Brendan: It comes from node_modules after we install Express
var express = require("express");

// invoke var express and store the resulting application in var application
var app = express();
app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

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
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
