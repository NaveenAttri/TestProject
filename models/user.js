/**
 * A model for our user
 */
'use strict';
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    crypto = require('../lib/crypto');

var userModel = function () {

        var userSchema = mongoose.Schema({
            name: String,
            login: { type: String, unique: true },  //Ensure logins are unique.
            password: String, //We'll store bCrypt hashed passwords.  Just say no to plaintext!
            role: String
        });

        userSchema.pre('save', function (next) {
            var user = this;

            if (!user.isModified('password')) {
                next();
                return;
            }

            var hashedPwd = bcrypt.hashSync(user.password, crypto.getCryptLevel());

            user.password = hashedPwd;

            next();
        });


        userSchema.methods.passwordMatches = function (plainText) {
            var user = this;
            return bcrypt.compareSync(plainText, user.password);
        };


        return mongoose.model('User', userSchema);
    };

module.exports = new userModel();
