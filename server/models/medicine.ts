import { Sequelize, Model, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
    interface MedicineModel extends Model{
        id: number;
        name: string;
        type: string;
        shape: string;
        composition: string;
        manufacturer: string;
        need_prescription: boolean;
        additional_notes: string;
        replacement_list: Array<number>
    }

    const Medicine = sequelize.define<MedicineModel>('Medicine', {
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
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shape: {
            type: DataTypes.STRING,
            allowNull: false
        },
        composition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        need_prescription: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        additional_notes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        replacement_list: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
        tableName: 'Medicines',
        underscored: true
    });

    return Medicine;
}