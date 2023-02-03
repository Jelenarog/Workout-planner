// global includes //
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// model // 
class Muscle extends Model { 
}

// model fields // 
Muscle.init(
    {
        muscle_id: {
            type: DataTypes.INTEGER,  
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        muscle_name: {
            type: DataTypes.STRING,    
            allowNull: false,
         },
         musclegroup_id: {
            type: DataTypes.INTEGER,  
            allowNull: false,
            references: {
                model: 'musclegroup', 
                key: 'musclegroup_id', 
            }
        },


    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'muscle',
        freezeTableName: true, 
    }
);

module.exports = Muscle;