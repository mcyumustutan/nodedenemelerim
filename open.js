var fs = require('fs');

fs.open('okunacak.txt', 'r', function (err, fd) {
    if (err)
        console.log('Dosya açılamadı');
    else
        console.log('Dosya açıldı');
});

