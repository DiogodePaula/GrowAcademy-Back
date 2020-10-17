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
        user_uid: {
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
}

export default ClassUser;
