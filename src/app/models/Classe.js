import Sequelize, { Model } from 'sequelize';

class Classe extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        bootcamp: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        date: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        hour: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        status: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.hasOne(models.ClassUser, {
  //     as: 'class',
  //     foreignKey: 'uid',
  //   });
  // }
}

export default Classe;
