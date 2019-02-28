'use strict';

module.exports = function (app) {
    var controller = require('../controller/trainee-controller');

    app.route('/traineeAll').get(controller.traineeAll);
    app.route('/trainee/:id').get(controller.traineeById);
    app.route('/trainee').post(controller.traineeCreate);
    app.route('/trainee/:id').put(controller.traineeUpdate);
    app.route('/trainee/:id').delete(controller.traineeDelete);
};