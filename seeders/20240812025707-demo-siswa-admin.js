"use strict";
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSaltSync(10);
    const adminId = await queryInterface.rawSelect(
      "roles",
      {
        where: { name: "admin" },
      },
      ["id"]
    );

    // siswa merupakan nama table di dalam db
    await queryInterface.bulkInsert(
      "siswas",
      [
        {
          id: v4(),
          name: "admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("111213", salt),
          role_id: adminId,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("siswas", null, {});
  },
};
