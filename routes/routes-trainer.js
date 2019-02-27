'use strict';

module.exports = function (app) {
    var controller = require('../controller/trainer-controller');

    app.route('/trainerAll').get(controller.trainerAll);
    app.route('/trainer/:id').get(controller.trainerById);
    app.route('/trainer').post(controller.trainerInsert);
    app.route('/trainer/:id').put(controller.trainerUpdate);
    app.route('/trainer/:id').delete(controller.trainerDelete);
};