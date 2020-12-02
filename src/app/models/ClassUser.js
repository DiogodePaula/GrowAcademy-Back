import Sequelize, { Model } from 'sequelize';

class ClassUser extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        status: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        growdever_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          reference: {
            model: 'growdever',
            key: 'uid',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        class_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          reference: {
            model: 'user',
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
    this.hasMany(models.Growdever, {
      as: 'growdevers',
      sourceKey: 'growdever_uid',
      foreignKey: 'uid',
    });
    this.hasOne(models.Classe, {
      as: 'classes',
      foreignKey: 'class_uid',
    });
  }
}

export default ClassUser;
