var response = require('../model/res');
var trainerDao = require('../dao/trainer-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');

exports.trainerAll = function (req, res) {
    trainerDao.getAll(function (error, rows) {
        if (error) {
            logger.error('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.trainerById = function (req, res){
    trainerDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else {
            response.ok(data, res);
        }
    })
}


exports.trainerInsert = function (req, res) {
    logger.info('request for insert :');
    logger.debug(req.body);
    trainerDao.insert(req.body, function (err, data) {
        if (err) {
            logger.error('error call insert : ' + err);
            response.err(err, res);
        } else {
            response.ok('data inserted with id ' + data.trainer_id, res);
        }
    })
}

exports.trainerUpdate = function (req, res) {
    // logger.info('request for update :');
    // logger.debug(req.body);

    trainerDao.getById(req.body.trainer_id, function (err, data) {
        if (err) {
            logger.error('error call update ' + err);
            response.err(err, res);
        } else if(data == null) {
            response.datanotfound('trainer not found', res);
        }else{
            trainerDao.update(req.body.trainer_id, req.body, function (err, data) {
                if (err) {
                    logger.error('call update' + err);
                    response.err(err, res);
                } else {
                    response.ok('updated data' + data.trainer_id, res)
                }
            })
        }
    })
}


exports.trainerDelete = function (req, res) {
    logger.info(util.format('deleting trainer id %s', req.params['id']));
    trainerDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if(data == null) {
            response.datanotfound('trainer data not found ', res);
        }else{
            trainerDao.del(req.params['id'], function (err, data) {
                if(err){
                    logger.info('error call update' +err);
                    response(err, res);
                }
                response.ok('trainer deleted is '+data.trainer_id, res);
            });
        }
    });

}








