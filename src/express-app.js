const express = require('express');
const cors = require('cors');
// const { customer, products, shopping } = require('./api');
const HandleErrors = require('./utils/error-handler');
const { user, guardian } = require('./api');


module.exports = async (app) => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true, }));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //api
    user(app)
    guardian(app)
    // shopping(app);

    // error handling
    app.use(HandleErrors);

}