module.exports = (sequelize, type )=>{
    return sequelize.define('trainee', {
        trainee_id:{
            field: 'trainee_id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            field: 'first_name',
            type: type.STRING
        },
        last_name:{
            field:'last_name',
            type: type.STRING
        },
        email:{
            field:'email',
            type: type.STRING
        },
        phone:{
            field:'phone',
            type: type.STRING
        },
        address:{
            field:'address',
            type: type.STRING
        },
        batch_id:{
            field:'batch_id',
            type: type.INTEGER,
            references:{
                model:'Bootcamp_batch',
                key: 'batch_id'
            }
        },
        active_flag:{
            field:'active_flag',
            type: type.ENUM('1', '0'),
            defaultValue : "1"
        }
    },{
        tableName: 'trainee',
        timestamps: false
    })
}