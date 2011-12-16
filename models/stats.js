var db = require('./index');

db.computeCityStats(function(error) {
    if (error) {
        console.log('CITY STATS ERROR', error);
        process.exit();
    } else {
        console.log("CITY STATS COMPUTED");
        db.computeStateStats(function(error) {
            if (error) {
                console.log('STATE STATS ERROR', error);
            } else {
                console.log("STATE STATS COMPUTED");

            }
            process.exit();
        });
    }
});
