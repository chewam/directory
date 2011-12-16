var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/directory');


var mapSchema = new mongoose.Schema({
    path: String,
    statecode: String,
    position: {top: Number, left: Number}
});

var Map = mongoose.model('Map', mapSchema);

var cityStatSchema = new mongoose.Schema({
    citycode: String,
    city: {type: String, uppercase: true},
    state: {type: String, uppercase: true},
    statecode: String,
    count: {type: Number, default: 0}
});

var CityStat = mongoose.model('CityStat', cityStatSchema);


var stateStatSchema = new mongoose.Schema({
    citycode: String,
    city: {type: String, uppercase: true},
    state: {type: String, uppercase: true},
    statecode: String,
    count: {type: Number, default: 0}
});

var StateStat = mongoose.model('StateStat', stateStatSchema);


var itemSchema = new mongoose.Schema({
    name: String,
    city: {type: String, uppercase: true},
    citycode: String,
    state: {type: String, uppercase: true},
    statecode: String,
    address: String,
    lat: Number,
    lng: Number,
    image: String,
    tel: String
});

var Item = mongoose.model('Item', itemSchema);

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

function Db() {};

Db.prototype.dropTables = function(cb) {
    var count = 0;

    var callback = function() {
        count++;
        if (count === 3) {
            cb.apply(this, arguments);
        }
    };

    (new Item()).collection.drop(callback);
    (new CityStat()).collection.drop(callback);
    (new StateStat()).collection.drop(callback);
};

Db.prototype.populate = function(cb) {
    var data = require('./data'),
        l = data.length,
        count = 0;

    var callback = function() {
        count++;
        if (count === l) {
            cb.apply(this, arguments);
        }
    };

    for (var i = 0; i < l; i++) {
        (new Item(data[i])).save(callback);
    }
};

Db.prototype.computeCityStats = function(cb) {
    var l, count = 0;

    var command = {
        group: {
            ns: 'items',
            key: {'city': 1},
            initial: {'count': 0},
            $reduce: 'function(doc, out) { out.count++; }'
        }
    };

    var callback = function() {
        count++;
        if (count === l) {
            cb.apply(this, arguments);
        }
    };

    mongoose.connection.db.executeDbCommand(command, function(err, dbres) {
        var items = dbres.documents[0].retval;

        l = items.length;

        for (var i = 0; i < l; i++) {
            (new CityStat(items[i])).save(callback);
        }
    });
};

Db.prototype.computeStateStats = function(cb) {
    var l, count = 0;

    var command = {
        group: {
            ns: 'items',
            key: {'statecode': 1},
            initial: {'count': 0},
            $reduce: 'function(doc, out) { out.count++; out.state = doc.state; }'
        }
    };

    var callback = function() {
        count++;
        if (count === l) {
            cb.apply(this, arguments);
        }
    };

    mongoose.connection.db.executeDbCommand(command, function(err, dbres) {
        var items = dbres.documents[0].retval;

        l = items.length;

        for (var i = 0; i < l; i++) {
            (new StateStat(items[i])).save(callback);
        }
    });
};

Db.prototype.count = function(cb) {
    var count = 0, data = [];

    var callback = function(name) {
        return function(error, cnt) {
            count++;
            data.push({table: name, count: cnt});
            if (count === 3) {
                cb.call(this, data);
            }
        }
    };

    Item.count(callback('Item'));
    CityStat.count(callback('CityStat'));
    StateStat.count(callback('StateStat'));
};

Db.prototype.map = function(data, cb) {
    var l = data.length,
        count = 0;

    var callback = function() {
        count++;
        if (count === l) {
            cb.apply(this, arguments);
        }
    };

    for (var i = 0; i < l; i++) {
        (new Map(data[i])).save(callback);
    }
};

module.exports = new Db();
