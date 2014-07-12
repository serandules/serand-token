var Token = require('token');

module.exports = function (token, callback) {
    Token.findOne({
        _id: token
    })
        .exec(function (err, token) {
            callback(err, token);
        });
};