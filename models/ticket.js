//ticket model
module.exports = (sequelize, DataTypes) => {
    const ticket = sequelize.define('tickettable', {
      ticket_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Date: {
        type: DataTypes.DATE, 
        allowNull: false,
      },
      Issue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Urgency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
  
    return ticket;
  };
  