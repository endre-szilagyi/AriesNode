'use strict';
const express = require('express');
const app = express();
const config = require('./config');


require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.all('*', function (req, res, next) {
    console.log('final mid');
    res.status(404).json({
        status: 'fail',
        message: `No Such page ${req.url}`
    })
});

app.use('*', function (err, req, res, next) {
    console.log('err', err);
    res.status(404).json({
        status: 'Error',
        message: err
    })
});


app.listen(config.PORT, function () {
    console.log(`API on port ${config.PORT}`)
});
