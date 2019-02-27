const {studyperiod} = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getAll = function getAll(callback) {
    studyperiod.findAll()
        .then((study_periode) => {
            return callback(null, study_periode);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}


exports.getById = function getById(week_id, callback) {
    studyperiod.findById(week_id)
        .then((study_period) => {
            return callback(null, study_period);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};



exports.insert = function insert(data, callback) {
    studyperiod.create(data)
        .then(studyPeriod => {
            return callback(null, studyPeriod);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};

exports.update = function update(week_id, data, callback) {
studyperiod.update(data, {
    where:{
        week_id: data.week_id
    },
    returning: true,
    plain:true
})
.then((result) => {
    logger.info('result, update:');
    logger.info(result);
    return callback(null, data);
}).catch((err) => {
    logger.error(error);
    return callback(error);
});


}




exports.del = function del(week_id, callback) {
    studyperiod.destroy({
            where: {
                week_id: week_id
            }
        })
        .then(result => {
            logger.info('result  update:');
            logger.info(result);
            return callback(null, week_id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};




