const Sequelize = require('sequelize')
const bootcamp_batchModel= require('../model/bootcamp_batch')
const study_materialModel= require('../model/study_material')
const trainerModel = require('../model/trainer')
const study_periodModel = require('../model/study_period')
const trainee = require('../model/trainee')

const sequelize = new Sequelize('bootcamp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})


const Bootcamp_batch = bootcamp_batchModel(sequelize, Sequelize)
const study_material = study_materialModel(sequelize, Sequelize)
const trainer = trainerModel (sequelize, Sequelize)
const studyperiod = study_periodModel(sequelize, Sequelize)
const trainee = traineeModel( sequelize, Sequelize)

module.exports = {
    Bootcamp_batch,
    study_material,
    trainer,
    studyperiod,
    trainee
}