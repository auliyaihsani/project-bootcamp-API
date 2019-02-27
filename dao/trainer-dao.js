const {
    trainer
} = require('../db/sequelize');

var logger = require('../util/logging/winston-logger');

exports.getById = function getById(trainer_id, callback) {
    trainer.findById(trainer_id)
    .then((trainer) => {
        return callback(null, trainer)
    }).catch((err) => {
        logger.error(err);
        return callback(err);
    });
}


exports.getAll = function getAll(callback) {
    trainer.findAll()
    .then((trainer) => {
        return callback(null, trainer)
    }).catch((err) => {
        logger.error(err);
        return callback(err);
    });
}

exports.insert = function insert( data, callback  ) {
    trainer.create(data) .then((trainer) => {
        return callback(null, data);
    }).catch((err) => {
        logger.error(err);
        return callback(err);
    });
}


exports.update = function update(trainer_id, data, callback) {
    trainer.update(data, {
        where : {
            trainer_id : data.trainer_id,
        },
        returning: true,
        plain: true
    })
    .then((result) => {
        return callback(null, data);
        logger.info(result);
        logger.info('result, update:');
    }).catch((err) => {
        logger.info(result);
        return callback(err);
    });
}

exports.del = function del(trainer_id, callback) {
    trainer.destroy({
            where: {
                trainer_id: trainer_id
            }
        })
        .then(result => {
            logger.info('result  update:');
            logger.info(result);
            return callback(null, trainer_id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};