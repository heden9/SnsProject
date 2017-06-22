var db = require('./db');

exports.sendByNamePwd = function(data,callback){
    var sql = 'insert into t_user(username,password,name) values(?,?,?)';
    db.query(sql, [data.username, data.pwd, data.name], callback);
};

exports.getByNamePwd = function(name, pwd, callback){
    if(name == null || pwd == null)
        return;
    var sql = 'select * from t_user where username = ? and password = ?';
    db.query(sql, [name, pwd], callback);

};