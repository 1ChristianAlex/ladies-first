"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Admin",
        lastname: "Leaf",
        email: "admin@leaf.com",
        password:
          "777cdffb8fc2936b90b2dac9b9b80abdabd6a0c208e8421e678ca8bfed7b9b30",
        //123456789
        birthday: "2019-10-20 03:00:00",
        cpf: "999-999-999-99",
        current_company: "Leaft",
        short_description:
          "In last step you have create a seed file. It's still not committed to database. To do that we need to run a simple command.",
        description:
          "The next is an example of a migration that has uses async/await where you create an unique index on a new column:",
        personal_link: "https://github.com/1ChristianAlex/social-woman",
        tel: "99 9 9999-9999",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
