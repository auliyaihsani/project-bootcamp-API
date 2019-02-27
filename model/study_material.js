
module.exports = (sequelize, type) => {
    return sequelize.define('study_material',{
        material_id:{
            field: 'material_id',
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
        tableName : "study_material",
        timestamps : false
    })
}