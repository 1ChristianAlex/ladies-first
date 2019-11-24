"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("companys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(25)
      },
      lastname: {
        type: Sequelize.STRING(25)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      cnpj: {
        type: Sequelize.STRING(20),
        unique: true
      },
      short_description: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      personal_link: {
        type: Sequelize.STRING(50)
      },
      tel: {
        type: Sequelize.STRING(20)
      }
    });
  },

  down: queryInterface => queryInterface.dropTable("companys")
};
