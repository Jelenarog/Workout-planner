// global includes // 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// model // 
class Favoriteexercises extends Model {
}

// model fields // 
Favoriteexercises.init(
    {
        favoriteexercise_id: {
            type: DataTypes.INTEGER,  
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "exercises",
              key: "exercise_id",
            },
          },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id',
            }
        },
    },
    {
        sequelize,
        timestamps: false, 
        modelName: 'favoriteexercises',
        freezeTableName: true, 
    }
);

module.exports = Favoriteexercises;