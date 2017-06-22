var userModel = require('../models/userModel');
exports.checkLogin = function (req, res, next) {
    var name = req.body.name;
    var pwd = req.body.pwd;
    console.log(name);
    console.log(pwd);
    userModel.getByNamePwd(name, pwd, function(result){
        if(result.length > 0){
            console.log(result);
            var data = {
                username: result[0].username,
                name: result[0].name,
                id: result[0].id,
                headerPortrait: result[0].headerPortrait
            };
            res.send(data);
        } else
            res.send(false);
    });
};

exports.login = function(req, res, next) {
    res.send('zz');
};