var mongoose = require('mongoose');

module.exports = function(req, res) {
    var query = mongoose.model('CityStat').find({});
    query.exec(function(error, docs) {
        docs = docs || [];
        res.render('cities', {
            items: docs,
            count: docs.length,
            title: 'Concessionnaires Automobiles'
        });
    });
};
