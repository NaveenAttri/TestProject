'use strict';

var Meeting = require('../../models/meeting'),
  mongoose = require('mongoose');

module.exports = function (router) {

  router.post('/', function(req, res) {

    var setMeet = new Meeting({
      starttime: new Date(),
      duration: 30,
      startdate: new Date(),
      subject: 'Meeting'
    });

    setMeet.save(function (err) {
      if (err) {
        throw err;
      } else {
        // res.send('success');
        console.log('success save');
      }
    });

    Meeting.find(function (err, meetings) {
      if (err) {
        res.send('error');
      } else {
        res.send(meetings);
      }
    })
  });

  router.get('/cancelmeeting', function(req, res) {
    Meeting.remove({subject: 'Meeting'}, function (err) {
      if (err) {
        console.log('Error cancelling a meeting');
        // res.send('Error cancelling a meeting');
      } else {
        console.log('Successfully canceled the meeting');
        // res.send('Successfully canceled the meeting');
      }
    });

    Meeting.find(function (err, meetings) {
      if (err) {
        res.send(err);
      } else {
        res.send(meetings);
      }
    });
  });
}
