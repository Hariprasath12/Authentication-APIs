const db = require('../config/db');

const bcrypt = require('bcrypt');

module.exports.adddata = function(data,callback) {
    // console.log(phc)
    var sql = 'Insert into data (name,email,password) values ?';
    db.query(sql,[data], callback);
}

module.exports.checkuser = function(name,callback) {
    // console.log(phc)
    var sql = 'SELECT password FROM data where email=? ; ';
    db.query(sql,[name] ,callback);
}


module.exports.forgetpassword = function(email,callback) {
    // console.log(phc)
    var sql = 'SELECT count(*) FROM data where email=?; ';
    db.query(sql,[email] ,callback);
}




