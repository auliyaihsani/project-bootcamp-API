'use strict';

module.exports = function (app) {
    var controller = require('../controller/study_period-controller');

    app.route('/studyperiodAll').get(controller.studyperiodeAll);
    app.route('/studyperiod/:id').get(controller.studyperiodById);
    app.route('/studyperiod').post(controller.studyperiodInsert);
    app.route('/studyperiod/:id').put(controller.studyperiodeUpdate);
    app.route('/studyperiod/:id').delete(controller.studyperiodDelete);

};