var response = require('../model/res');
var study_materialDao = require('../dao/study_material-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');


exports.study_materialAll = function (req, res) {
    study_materialDao.getAll(function (error, rows) {
        if (error) {
            logger.error('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res);
            // return res.json(rows);
        }
    });
}


exports.studyMaterialId = function (req, res) {
    study_materialDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, rows, res);
    });

}


exports.insertStudyMaterial = function (req, res) {
    study_materialDao.insertStudyMaterial( req.body, function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        }
        response.ok(data, res);
    });

}


exports.updateStudyMaterial = function (req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    study_materialDao.getById(req.body.material_id, function (err, data) {
        if (err) {
            logger.error('error call update ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('study material not found', res);
        } else {
            study_materialDao.update(req.body.material_id, req.body, function (err, data) {
                if (err) {
                    logger.error('call update' + err);
                    response.err(err, res);
                }
                response.ok('updated data' + data.material_id, res)
            });
        }
    });
}



exports.studyMaterialDelete = function (req, res) {
    logger.info(util.format('deleting study material id %s', req.params['id']));
    study_materialDao.getById(req.params['id'], function (err, data) { //check customer exists
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('study material not found', res);
        } else {
            //if exists, continue delete
            study_materialDao.del(req.params['id'], function (err, data) {
                if (err) {
                    logger.error('error call delete : ' + err);
                    response.err(error, res);
                }
                response.ok('study material deleted with id : ' + data, res);
            });
        }
    });
}
