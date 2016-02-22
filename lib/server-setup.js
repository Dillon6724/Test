var bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    session         = require('session'),
    express          = require('express');

// Export server
module.exports = function () {
  var server = express();

  // setting up sessions
  server.use(session ({
    secret:"superSecrets",
    resave: false,
    saveUninitialized: true
  }));

  // setting up flash messages
  server.use(function (req, res, next) {
    res.locals.flash = req.session.flash || {};
    req.session.flash = {};
    next();
  })

}
