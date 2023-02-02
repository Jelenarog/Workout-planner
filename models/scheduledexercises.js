const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ScheduledExercises extends Model {}

ScheduledExercises.init(
  {
    scheduled_id: {
      type: DataTypes.INTEGER,  
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "exercises",
        key: "exercise_id",
      },
    },
    exercise_sets: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    exercise_reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    exercise_weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    exercise_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    user_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0, 
      allowNull: false,
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
    modelName: "scheduledexercises",
    freezeTableName: true,
  }
);

module.exports = ScheduledExercises;
