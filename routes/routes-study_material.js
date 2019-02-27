'use strict';

module.exports = function (app) {
    var controller = require('../controller/study_material-controller');

    app.route('/study_materialAll').get(controller.study_materialAll);
    app.route('/study_Material/:id').get(controller.studyMaterialId);
    app.route('/study_Material').post(controller.insertStudyMaterial);
    app.route('/study_Material/:id').put(controller.updateStudyMaterial);
    app.route('/study_Material/:id').delete(controller.studyMaterialDelete);

};