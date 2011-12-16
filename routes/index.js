var models = require('../models'),
    mongoose = require('mongoose');

exports.index = function(req, res) {
    res.render('index', {
        title: 'Concessionnaires Automobiles'
    });
};

exports.city = require('./city');
exports.state = require('./state');
exports.cities = require('./cities');
exports.states = require('./states');
