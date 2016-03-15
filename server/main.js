// Start the server
var config = require('./config');
var server = require('wetfish-server').createServer(config);

// Connect to the Coinbase API
server.coinbase = require('./coinbase');

// Add a custom model
require('./models/example')(server.model);

// Add some routes
require('./routes/login')(server);
require('./routes/pages')(server);
