var config = require('./config');
var coinbaseApi = require('coinbase').Client;

var coinbaseConfig =
{
    apiKey: config.coinbase.key,
    apiSecret: config.coinbase.secret
};

// Are we in testing mode?
if(config.coinbase.environment == 'sandbox')
{
    coinbaseConfig.baseApiUri = 'https://api.sandbox.coinbase.com/v2/';
}

module.exports = new coinbaseApi(coinbaseConfig);
