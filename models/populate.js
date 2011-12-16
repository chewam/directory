var db = require('./index');

db.populate(function(error) {
    if (error) {
        console.log('ERROR', error);
    } else {
        console.log("POPULATE OK");
    }
    process.exit();
});
