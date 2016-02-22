
var mongoose = require('mongoose'),
    server   = require('./lib/server-setup')(),
    bcrypt   = require('bcrypt'),
    PORT     = process.env.PORT || 3000,
    dbname   = 'testapp'
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
    Schema   = mongoose.Schema,
    User     = require('./models/user.js');

server.get('/login', function(req, res) {
  res.sendFile("login.html", {
    root: __dirname + "/public/templates"
  })
})

server.get('/', function (req, res) {
  console.log("GETTING /...");
})

mongoose.connect(MONGOURI + "/" + dbname);

server.listen(PORT, function () {
  console.log("\n WERK WERK WERK WERK WERK WERKing on", PORT);
});
