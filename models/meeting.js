'use strict';
var mongoose = require('mongoose');

var meetingModel = function(){

            var meetingSchema = mongoose.Schema({
            calenderid: {type:Number, unique: true},
            starttime: Date,
            duration: Number,
            startdate: Date,
            subject: String
        });

    };

    module.exports = new meetingModel();

