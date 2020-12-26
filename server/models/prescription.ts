import { Sequelize, DataTypes, Model } from 'sequelize';

export default (sequelize: Sequelize) => {
    interface PrescriptionModel extends Model {
        id: number;
        dateOfIssue: Date;
        status: Array<string>;
    }

    const Prescription = sequelize.define<PrescriptionModel>('Prescription', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateOfIssue: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.ENUM,
            values: ['new', 'processed', 'denied']
        }
    }, {
        tableName: 'Prescriptions',
        underscored: true
    });

    return Prescription;
}