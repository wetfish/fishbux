module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;
    var coinbase = server.coinbase;

    app.get('/', function(req, res)
    {
        event.emit('render', req, res, {view: 'index', hello: 'world'});
    });

    app.get('/example', function(req, res)
    {
        event.emit('render', req, res, {view: 'example'});
    });

    app.get('/coinbase', function(req, res)
    {
        // Test Coinbase API
        coinbase.getAccounts({}, function(err, accounts)
        {
            accounts.forEach(function(account)
            {
                console.log('Account: ' + account.name + ' | Balance: ' + account.balance.amount);
            });
        });

        res.end("Check your console.");
    });
}
