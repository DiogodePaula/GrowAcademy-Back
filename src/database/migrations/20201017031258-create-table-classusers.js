module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classusers', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
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
    await queryInterface.dropTable('classusers');
  },
};
