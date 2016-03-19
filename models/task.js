"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    completedAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    },
    instanceMethods: {
      isCompleted: function() {
        return !!this.completedAt;
      },
      markCompleted: function() {
        return this.update({ completedAt: sequelize.fn('NOW') });
      }
    }
  });

  return Task;
};
