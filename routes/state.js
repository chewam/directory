var mongoose = require('mongoose');

module.exports = function(req, res) {
    var pageSize = 5,
        code = req.params.code,
        page = req.params.page || 1,
        location = req.params.location,
        condition = {'state': location.toUpperCase()},
        query = mongoose.model('Item').find(condition);

    console.log("STATE", req.params, location, code, condition, !!parseInt(location), !!parseInt(code));

    query.limit(pageSize).skip(page * pageSize).asc('name');

    query.exec(function(error, docs) {
        docs = docs || [];
        mongoose.model('Item').find(condition).count(function(error, count) {
            res.render('state', {
                items: docs,
                currentPage: parseInt(page),
                pageSize: pageSize,
                pageCount: Math.ceil(count/pageSize),
                count: docs.length,
                title: 'Concessionnaires Automobiles'
            });
        });
    });
};
