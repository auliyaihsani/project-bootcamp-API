

module.exports = (sequelize, type) => {
    return sequelize.define('bootcamp_batch',{
        batch_id:{
            field: 'batch_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            field: 'description',
            type: type.STRING
        },
        sequence: {
            field: 'sequence',
            type: type.INTEGER
        },
        start_date: {
            field: 'start_date',
            type: type.DATE
        },
        finish_date: {
            field: 'finish_date',
            type: type.DATE
        },
    }, {
        tableName : "bootcamp_batch",
        timestamps : false
    })
}