"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("imagens", [
      {
        fieldname: "",
        mimetype: "image/jpeg",
        destination: "",
        filename: "47725581",
        path: "https://avatars2.githubusercontent.com/u/",
        small_image_path: "",
        url: "https://avatars2.githubusercontent.com/u/47725581",
        size: "134534",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  }
};
