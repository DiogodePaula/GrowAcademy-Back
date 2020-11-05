import Sequelize, { Model } from 'sequelize';

class Growdever extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          validate: {
            isEmail: true,
          },
        },
        phone: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        program: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        user_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          reference: {
            model: 'users',
            key: 'uid',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_uid',
    });
  }
}

export default Growdever;
