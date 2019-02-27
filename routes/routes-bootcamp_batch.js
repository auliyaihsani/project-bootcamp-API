'use strict';

module.exports = function (app) {
    var controller = require('../controller/bootcamp_batch-controller');

    app.route('/Bootcamp_batch').get(controller.Bootcamp_batch);

    app.route('/Bootcamp').post(controller.BootcampInsert);
    app.route('/Bootcamp/:id').get(controller.BootcampbyId);
    app.route('/Bootcamp').put(controller.BootcampUpdate);
    app.route('/Bootcamp/:id').delete(controller.BootcampDel);
  
};