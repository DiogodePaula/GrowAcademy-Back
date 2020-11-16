module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('class-users', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      growdever_uid: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'growdevers',
          key: 'uid',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      class_uid: {
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
    await queryInterface.dropTable('class-users');
  },
};
