const Bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('ADMIN', 'NORMAL_USER'),
            defaultValue: 'NORMAL_USER',
        },
        age: {
            type: DataTypes.INTEGER(),
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT(),
            allowNull: true,
        },
        longitude: {
            type: DataTypes.FLOAT(),
            allowNull: true,
        }
    }, {
        classMethods: {
            associate(models) {
                User.hasMany(models.Post, {foreignKey: 'userId', as: 'posts'});
            },
            generateHash(password) {
                return Bcrypt.hashSync(password, Bcrypt.genSaltSync(8), null);
            },
        },
        instanceMethods: {
            validatePassword: function (password) {
                if (Bcrypt.compareSync(password, this.password))
                    return true;
                else
                    return false;
            },
            toJSON: function () {
                let values = Object.assign({}, this.get());
                delete values.password;
                return values;
            },
        },
        hooks: {
            beforeCreate: function (user, options) {
                if (user.changed('password')) {
                    user.password = this.generateHash(user.password);
                }
            },
            beforeUpdate: function (user, options) {
                if (user.changed('password')) {
                    user.password = this.generateHash(user.password);
                }
            },
        },
        privateColumns: ['password'],
    });
    return User;

};