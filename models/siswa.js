"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Siswa.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
        },
      },
      role_id: {
        type: DataTypes.UUID,
      },
    },
    {
      hooks: {
        beforeCreate: async (siswa) => {
          // enkripsi password
          if (siswa.password) {
            const salt = await bcrypt.genSaltSync(10);
            siswa.password = bcrypt.hashSync(siswa.password, salt);
          }
          // ambil id dari table berdasarkan kolom name
          if (!siswa.role_id) {
            const roleSiswa = await sequelize.models.Role.findOne({
              where: { name: "siswa" },
            });
            siswa.role_id = roleSiswa.id;
          }
        },
      },
      sequelize,
      modelName: "Siswa",
    }
  );

  // fungsi untuk cek password
  Siswa.prototype.CorrectPassword = async (reqPassword, passwordDB) => {
    return await bcrypt.compareSync(reqPassword, passwordDB);
  };
  return Siswa;
};
