var models = require('../models'),
    mongoose = require('mongoose');

exports.index = function(req, res) {
    res.render('index', {
        title: 'Concessionnaires Automobiles'
    });
};

exports.cities = require('./cities');
exports.states = require('./states');

exports.state = function(req, res) {
    res.render('index', {
        title: 'Recherche ' + req.params.state + ' ' + req.params.zip
    });
};
