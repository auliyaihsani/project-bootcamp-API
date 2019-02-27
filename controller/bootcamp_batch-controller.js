var response = require('../model/res');
var bootcamp_batchDao = require('../dao/bootcamp_batch-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');


exports.Bootcamp_batch = function (req, res) {
    bootcamp_batchDao.getAll(function (error, rows) {
        if (error) {
            logger.error('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res);
            // return res.json(rows);
        }
    });
}

exports.BootcampbyId = function (req, res) {
    bootcamp_batchDao.getById(req.params['id'], function(err, data){
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else {
            response.ok(data, res);
        }
    });
}

exports.BootcampInsert = function  (req, res) {
    logger.info("request for insert : ");
    logger.debug(req.body);

    bootcamp_batchDao.insert(req.body, function (err, data) {
        if (err) {
            logger.error('error call insert : ' + err);
            response.err(err, res);
        } else {
            response.ok('data inserted with id ' + data.batch_id, res);
        }
    });
}


exports.BootcampUpdate = function (req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    bootcamp_batchDao.getById(req.body.batch_id, function (err, data) {
        if (err) {
            logger.error('error call update ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('bootcamp batch not found', res);
        } else {
            bootcamp_batchDao.update(req.body.batch_id, req.body, function (err, data) {
                if (err) {
                    logger.error('call update' + err);
                    response.err(err, res);
                }
                response.ok('updated data' + data.batch_id, res)
            });
        }
    });
}

exports.BootcampDel = function (req, res) {
    logger.info(util.format('deleting bootcamp batch id %s', req.params['batch_id']));
    bootcamp_batchDao.getById(req.params['id'], function (err, data) { //check customer exists
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('bootcamp batch not found', res);
        } else {
            //if exists, continue delete
            bootcamp_batchDao.del(req.params['id'], function (err, data) {
                if (err) {
                    logger.error('error call delete : ' + err);
                    response.err(error, res);
                }
                response.ok('bootacamp batch deleted with batch id : ' + data, res);
            });
        }
    });
}









