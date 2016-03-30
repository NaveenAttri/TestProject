'use strict';


var IndexModel = require('../models/index'),
    ProfileModel = require('../models/profile'),
    AdminModel = require('../models/admin'),
    meetingModel = require('../models/meeting'),
    mongoose = require('mongoose'),
    auth = require('../lib/auth');


module.exports = function (router) {

    var indexmodel = new IndexModel();
    var profilemodel = new ProfileModel();
    var adminmodel = new AdminModel();


    router.get('/', function (req, res) {
        res.render('index', indexmodel);
    });


    router.get('/profile', function(req, res) {
        res.render('profile', profilemodel);
    });


    router.get('/admin', function(req, res) {
        res.render('admin', adminmodel);
    });

    router.get('/yes', function (req, res) {
        res.send("success");
    });

   
    router.post('/api/setmeeting', function(req, res) {
        var meetingModel = mongoose.model('Meeting',meetingModel.meetingSchema);
        var meetingModelData = new meetingModel({
            calenderid: 1,
            starttime: new Date(),
            duration: 30,
            startdate: new Date(),
            subject: "test"
        });
       
        meetingModelData.save(function(err,data){
            if(err){
                res.send("error");
            }else{
                res.send(data);
            }
        });
    });

    router.post('/api/cancelmeeting', function(req, res) {

    });

    /**
     * Allow the users to log out
     */
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

};
