var db = require('./index');

db.count(function(data) {
    for (var i = 0, l = data.length; i < l; i++) {
        console.log(data[i].table, data[i].count);
    }
    process.exit();
});
