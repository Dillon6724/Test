
var mongoose = require('mongoose'),
    server   = require('./lib/server-setup')(),
    bcrypt   = require('bcrypt'),
    PORT     = process.env.PORT || 3000,
    dbname   = 'testapp'
    MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017',
    Schema   = mongoose.Schema,


mongoose.connect(MONGOURI + "/" + dbname);

server.listen(PORT, function () {
  console.log("\n Hello, it's me on ", PORT);
});
