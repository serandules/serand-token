var debug = require('debug')('serandules-serand-token');
var mongoose = require('mongoose');
var Token = require('token');

module.exports = function (token, callback) {
    Token.findOne({
        access: token
    })
        .exec(function (err, token) {
            callback(err, token);
        });
};