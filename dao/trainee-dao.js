const {
    Bootcamp_batch,
    Trainee

} = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getById = function getById(trainee_id, callback) {
    Trainee.findById(trainee_id)
    .then((trainee) => {
        return callback(null, trainee)
    }).catch((err) => {
        logger.error(err)
        return callback(err)
    });
}

exports.getAll = function getAll(callback) {
    Trainee.findAll({
        include: [Bootcamp_batch]
    })
    .then((trainees) => {
        return callback(null, trainees)
    }).catch((err) => {
        logger.error(err)
        return callback(err)
    });
}


exports.inserttrainee = function inserttrainee(data, callback) {
    let trainee = data;
    if (trainee.bootcamp_batch == null & trainee.batch_id ==null) {
        resizeBy.json("trainee kosong");
    } else {
        if (trainee.batch_id ==null) {
            trainee.batch_id = trainee.bootcamp_batch.batch_id;
        }
    }

    Trainee.create(trainee)
    .then((trainee) => {
        return callback(null, trainee)
    }).catch((err) => {
        logger.error(err);
        return callback(err);
    });

}


exports.updatetrainee = function updatetrainee(trainee_id, data, callback) {
    let trainee = data;
    if (trainee.bootcamp_batch == null && trainee.trainee_id ==null) {
        res.json("trainee kosong")
    } else {
        if (trainee.trainee_id == null) {
            trainee.trainee_id = trainee.bootcamp_batch.batch_id;
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































