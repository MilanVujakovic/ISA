import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    interface PharmacyModel extends Model {
        id: number;
        name: string;
        address: string;
    }

    const Pharmacy = sequelize.define<PharmacyModel>('Pharmacy', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Pharmacies',
        underscored: true
    });

    return Pharmacy;
}