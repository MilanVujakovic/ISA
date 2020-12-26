import { Sequelize, Model, DataTypes} from 'sequelize';

export default (sequelize: Sequelize) => {
    interface UserModel extends Model {
        id: number;
        type: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        postalCode: string;
        country: string;
        phoneNumber: string;
        lastLogin: Date;
    }
    const User = sequelize.define<UserModel>('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.ENUM,
            values: ['patient', 'pharmacist', 'dermatologist']
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastLogin: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'Users',
        underscored: true
    });

    return User;
}