var response = require('../model/res');
var traineeDao = require('../dao/trainee-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');


exports.traineeAll = function (req, res) {
    traineeDao.getAll(function (err, rows) {
        if (err) {
            logger.error( 'error while select:'  +err);
            response.err(err, res);
        }else{
            response.ok(rows, res);
            // return res.json(rows);
        }
    })
}

exports.traineeById = function (req, res) {
    traineeDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call get byid' +err);
            response.err(err, res)
        } else {
            response.ok(data, res);
        }
    })
}


exports.traineeCreate = function (req, res) {
    traineeDao.inserttrainee(req.body, function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } 
        response.ok(data, res);
    })
}


exports.traineeUpdate = function (req, res) {
    traineeDao.getById(req.body.trainee_id, function (err, data) {
        if (err) {
            logger.error('error call update ' + err);
            response.err(err, res);
        } else if(data ==null) {
            response.datanotfound('trainee not found', res);
        }else{
            traineeDao.updatetrainee(req.body.trainee_id, req.body, function (err, data) {
                if (err) {
                    logger.error('call update' + err);
                    response.err(err, res);
                } else {
                    response.ok('updated data' + data.trainee_id, res)
                }
            });
        }
    });
}


exports.traineeDelete = function (req, res) {
    traineeDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else  if(data ==null) {
            response.datanotfound("trainer data not found", res)
        }else{
            traineeDao.del(req.params['id'], function (err, data) {
                if (err) {
                 logger.info('error call update' +err);
                 response(err, res);
                } 
                    
                response.ok('trainee deleted is '+data.trainee_id, res);
            })
        }
    })
}
































