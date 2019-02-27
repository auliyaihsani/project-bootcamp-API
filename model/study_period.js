
module.exports = (sequelize, type) => {
    return sequelize.define('study_period',{
        week_id:{
            field: 'week_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            field: 'description',
            type: type.TEXT
        },
        active_flag: {
            field: 'active_flag',
            type: type.ENUM('1', '0')
        }
    }, {
        tableName : "study_period",
        timestamps : false
    })
}