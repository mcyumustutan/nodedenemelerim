/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var fs = require('fs');

fs.exists('/usr/local/bin', function (exists) {
    console.log('exists:', exists);
});

fs.exists('/home/mcyu/work', function (exists) {
    console.log('exists:', exists);
});