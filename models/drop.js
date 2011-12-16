var db = require('./index');

db.dropTables(function(error) {
    if (error) {
        console.log('ERROR', error);
    } else {
        console.log("DROP OK");
    }
    process.exit();
});
