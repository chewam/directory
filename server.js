
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
    app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);
app.get('/concessionnaires/villes.html', routes.cities);
app.get('/concessionnaires/departements.html', routes.states);
app.get('/concessionnaires/ville/:location,:code,:page.html', routes.city);
app.get('/concessionnaires/ville/:location,:code.html', routes.city);
app.get('/concessionnaires/ville/:location.html', routes.city);
app.get('/concessionnaires/departement/:location,:code,:page.html', routes.state);
app.get('/concessionnaires/departement/:location,:code.html', routes.state);
app.get('/concessionnaires/departement/:location.html', routes.state);

app.listen(3001);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
