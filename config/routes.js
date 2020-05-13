'use strict';
const path = require('path');

module.exports.init = initRoutes;

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes');
    const routes = ['users', 'posts'];


    routes.forEach((route) => {
        app.use(require(routesPath + '/' + route))
    })
}
