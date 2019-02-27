const {
    Bootcamp_batch
} = require('../db/sequelize');


var logger = require('../util/logging/winston-logger');

exports.getAll = function getAll(callback) {
    Bootcamp_batch.findAll()
        .then((bootcampBatch) => {
            return callback(null, bootcampBatch);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};

exports.getById = function getById(batch_id, callback) {
    Bootcamp_batch.findById(batch_id)
    .then((bootcampBatch)=>{
        return callback(null, bootcampBatch);
    })
    .catch((error)=>{
        logger.error(error);
        return callback(error);
    })
}

exports.insert = function insert(data, callback) {
    Bootcamp_batch.create(data)
        .then(bootcampBatch => {
            return callback(null, bootcampBatch);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};


exports.update = function update(batch_id, data, callback) {
    Bootcamp_batch.update(data, {
      where: {
        batch_id: data.batch_id
      },
      returning: true,
      plain: true
    }).then((result)=>{
        logger.info('result, update:');
        logger.info(result);
        return callback(null, data);

    }).catch((error) => {
        logger.error(error);
        return callback(error);
    })
}


exports.del = function del(batch_id, callback) {
    Bootcamp_batch.destroy({
            where: {
                batch_id : batch_id
            }
        })
        .then(result => {
            logger.info('result  update:');
            logger.info(result);
            return callback(null, batch_id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};