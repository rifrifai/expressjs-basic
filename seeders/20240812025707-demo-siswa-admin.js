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

    await queryInterface.bulkInsert(
      // siswa merupakan nama table di dalam db
      "siswas",
      [
        {
          name: "John Doe",
          isBetaMember: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
