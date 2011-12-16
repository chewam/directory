var mongoose = require('mongoose');

module.exports = function(req, res) {
    var query = mongoose.model('StateStat').find({});
    query.asc('state');
    query.exec(function(error, docs) {
        docs = docs || [];
        res.render('states', {
            items: docs,
            count: docs.length,
            title: 'Concessionnaires Automobiles'
        });
    });
};
