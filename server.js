var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt',user.username + ' abhi!\n', ()=>{
    console.log('file is created');
});