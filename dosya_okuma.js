var fs = require("fs");
var DOSYA_ADI = "okunacaka.txt";

fs.exists(DOSYA_ADI, function (exists) {

    if (exists) {
        fs.stat(DOSYA_ADI, function (error, stats) {
            fs.open(DOSYA_ADI, "r", function (error, fd) {
                var buffer = new Buffer(stats.size);

                fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
                    var VERI = buffer.toString("utf8", 0, buffer.length);

                    console.log(VERI);

                    fs.close(fd);
                });
            });
        });
    }
});