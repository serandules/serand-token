var mongoose = require('mongoose');
var Token = mongoose.model('Token');

module.exports = function (token, callback) {
    Token.findOne({
        _id: token
    })
        .exec(function (err, token) {
            callback(err, token);
        });
};