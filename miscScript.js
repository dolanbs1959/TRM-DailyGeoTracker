const fs = require('fs');
const path = './docs/index.html';

fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/\/TRM-DailyGeoTracker\//g, '/docs/');

    fs.writeFile(path, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});