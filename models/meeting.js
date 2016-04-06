'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meetingSchema = new Schema({
    starttime: Date,
    duration: Number,
    startdate: Date,
    subject: String
});

var Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;
