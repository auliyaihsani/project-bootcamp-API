const {study_material} = require('../db/sequelize');


var logger = require('../util/logging/winston-logger');

exports.getAll = function getAll(callback) {
    study_material.findAll()
        .then((studymaterial) => {
            return callback(null, studymaterial);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};



exports.getById = function getById(material_id, callback) {
    study_material.findById(material_id)
        .then((studymaterial) => {
            return callback(null, studymaterial);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};


exports.insertStudyMaterial = function insertStudyMaterial(data, callback) {
    study_material.create(data)
        .then((studymaterial) => {
            return callback(null, studymaterial);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};

exports.update = function update(material_id, data, callback) {
    study_material.update(data, {
            where: {
                material_id: data.material_id
            },
            returning: true,
            plain: true
        })
        .then(result => {
            logger.info('result, update:');
            logger.info(result);
            return callback(null, data);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};


exports.del = function del(material_id, callback) {
    study_material.destroy({
            where: {
                material_id: material_id
            }
        })
        .then(result => {
            logger.info('result  update:');
            logger.info(result);
            return callback(null, material_id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
};