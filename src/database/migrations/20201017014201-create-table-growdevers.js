module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('growdevers', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
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
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('growdevers');
  },
};
