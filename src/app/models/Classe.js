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
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        hour: {
          allowNull: false,
          type: Sequelize.TIME,
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
}

export default Classe;
