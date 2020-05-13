'use strict';

const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const dateHelper = require('../helpers/date');

module.exports.init = initExpress;

function initExpress(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use((req, res, next) => {
        res.resources = res.resources || {};
        console.log(`Api call ${dateHelper.formattedDate()}`);
        next()
    });
}
