var models = require('../models'),
    mongoose = require('mongoose');

exports.index = function(req, res) {
    var query = mongoose.model('StateStat').find({});

    query.limit(20).sort('count', -1).exec(function(error, docs) {
        docs = docs || [];
        res.render('index', {
            items: docs,
            title: 'Concessionnaires Automobiles'
        });
    });
};

exports.city = require('./city');
exports.state = require('./state');
exports.cities = require('./cities');
exports.states = require('./states');
