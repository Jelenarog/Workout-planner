const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Exercises extends Model {
   
}

Exercises.init(
    {
        exercise_id: {
            type: DataTypes.INTEGER,  
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exercise_name: {
            type: DataTypes.STRING,    
            allowNull: false,
         },
        exercise_type: {
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
        exercise_equipment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exercise_difficulty: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        exercise_instructions: {
            type: DataTypes.TEXT('long'),
            allowNull: false, 
        }

    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'exercises',
        freezeTableName: true, 
    }
);

module.exports = Exercises;