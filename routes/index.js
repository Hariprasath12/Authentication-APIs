var express = require('express');
var router = express.Router();
const db = require('../models/connection');
const bcrypt = require('bcrypt');
/* GET home page. */
const nodemailer = require('nodemailer');
router.post('/register', function (req, res, next) {


    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    console.log(name);
    console.log(email);
    console.log(password);
    bcrypt.hash(password, 10, function (err, hash) {

        let data = [
            [name, email, hash]
        ];
        db.adddata(data, (err, userdetails) => {
            if (err) {
                res.send("sorry somedata is missing");
            } else {
                res.send("Registed successfully");
            }


        });
    });


});
router.post('/login', function (req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    // console.log(email);
    // console.log(password);

    db.checkuser(email, (err, userdetails) => {
        // console.log(userdetails);
        bcrypt.compare(password, userdetails[0].password, function (err, data) {
            if (data) {
                
                res.send("successfully loged in");
            } else {
                res.send("Check username or password");
            }
        });
      
    })


});
router.get('/forget/:email', function (req, res, next) {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'XXXXXXX',
                pass: 'YYYYYYY'
            },
            tls: {
                rejectUnauthorized: false
            }
        });



        var content = "link for password";
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'sathishkumar1@gmail.com', // sender address
            to: 'hariprasath.1295@gmail.com', // list of receivers
            subject: 'hi', // Subject line
            text: "reset password", // plain text body
            html: content // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
           res.send("check your inbox")
        });
    });

});





module.exports = router;