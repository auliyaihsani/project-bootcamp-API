const {
    Bootcamp_batch,
    trainee

} = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getById = function getById(id, callback) {
    trainee.findById(id, {
        include : Bootcamp_batch
    })
    .then((trainee) => {
        return callback(null, trainee)
    }).catch((err) => {
        logger.error(err)
        return callback(err)
    });
}

exports.getAll = function getAll(callback) {
    trainee.findAll({
        include : Bootcamp_batch
    })
    .then((trainees) => {
        return callback(null, trainees)
    }).catch((err) => {
        logger.error(err)
        return callback(err)
    });
}


exports.inserttrainee = function inserttrainee(data, callback) {
    let trainees = data;
    if (trainees.bootcamp_batch == null & trainees.batch_id ==null) {
        resizeBy.json("trainee kosong");
    } else {
        if (trainees.batch_id ==null) {
            trainees.batch_id = trainees.bootcamp_batch.batch_id;
        }
    }

    trainee.create(trainees)
    .then((trainee) => {
        return callback(null, trainee)
    }).catch((err) => {
        logger.error(err);
        return callback(err);
    });

}


exports.updatetrainee = function updatetrainee(trainee_id, data, callback) {
    let trainees = data;
    if (trainees.bootcamp_batch == null && trainees.trainee_id ==null) {
        res.json("trainee kosong")
    } else {
        if (trainees.trainee_id == null) {
            trainees.trainee_id = trainees.bootcamp_batch.batch_id;
        }
    }

    trainee.update(data, {
        where:{
            trainee_id:data.trainee_id
        },
        returning: true,
        plain: true
    })
    .then((result) => {
        logger.info('result  update:');
        logger.info(result);
        return callback(null, data);
    }).catch((err) => {
        logger.info(err)
        return callback(err)
        
    });
}


exports.del = function del(trainee_id, callback) {
    trainee.destroy({
            where: {
                trainee_id: trainee_id
            }
        })
        .then(result => {
            logger.info('result  update:');
            logger.info(result);
            return callback(null, trainee_id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};



























