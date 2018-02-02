'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
            },
            username: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
            },
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            role: {
                type: Sequelize.ENUM('ADMIN', 'NORMAL_USER'),
                defaultValue: 'NORMAL_USER',
            },
            age: {
                type: Sequelize.INTEGER(),
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            latitude: {
                type: Sequelize.FLOAT(),
                allowNull: true,
            },
            longitude: {
                type: Sequelize.FLOAT(),
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
    }
};