var response = require('../model/res');
var studyperiodDao = require('../dao/study_period-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');


exports.studyperiodeAll = function (req, res ) {
    studyperiodDao.getAll( function (error, rows) {
        if (error) {
            logger.error('error while select: ' + error);
            response.err(error, res);
        } else {
            response.ok(rows, res);
        }
    })
}


exports.studyperiodById = function (req, res) {
    studyperiodDao.getById(req.params['id'], function (err, data) {
        if(err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        }else{
            response.ok(data, res);
        }
    })
}



exports.studyperiodInsert = function (req, res) {
    logger.info('request for insert :');
    logger.debug(req.body);

    studyperiodDao.insert(req.body, function (err, data) {
        if (err) {
            logger.error( 'error call insert' +err)
            response.err(err, res);
        } else {
            response.ok('data inserted with id ' + data.week_id, res);
        }
    })
}



exports.studyperiodDelete = function (req, res) {
    logger.info(util.format('deleting trainer id %s', req.params['id']));
    studyperiodDao.getById(req.params['id'], function (err, data) {
        if (err) {
            logger.error('error call getById : ' + err);
            response.err(err, res);
        } else if(data == null) {
            response.datanotfound('study period data not found ', res);
        }else{
            studyperiodDao.del(req.params['id'], function (err, data) {
                if(err){
                    logger.info('error call update' +err);
                    response(err, res);
                }
                response.ok('study period deleted is '+data.week_id, res);
            });
        }
    });

}




exports.studyperiodeUpdate = function (req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    studyperiodDao.getById(req.body.week_id, function (err, data) {
        if (err) {
            logger.error('error call update ' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('study period not found', res);
        } else {
            studyperiodDao.update(req.body.week_id, req.body, function (err, data) {
                if (err) {
                    logger.error('call update' + err);
                    response.err(err, res);
                }
                response.ok('updated data' + data.week_id, res)
            });
        }
    });
}