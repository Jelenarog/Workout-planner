// global includes // 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// model // 
class Musclegroup extends Model {
}

// model fields // 
Musclegroup.init(
    {
        musclegroup_id: {
            type: DataTypes.INTEGER,  
            allowNull: false,
            primaryKey: true,
        },
        musclegroup_name: {
            type: DataTypes.STRING,    
            allowNull: false,
         },

    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'musclegroup',
        freezeTableName: true, 
    }
);

module.exports = Musclegroup;