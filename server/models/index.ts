import { Sequelize, Model } from 'sequelize';
import userModel from './user';
import pharmacyModel from './pharmacy';
import medicineModel from './medicine';
import prescriptionModel from './prescription';
import prescription from './prescription';


const sequelize = new Sequelize('pharmacy', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

interface Models {
    user: typeof Model;
    pharmacy: typeof Model;
    medicine: typeof Model;
    prescription: typeof Model;

    sequelize: Sequelize;
    Sequelize?: typeof Sequelize; 

}

const models: Models = {
    user: userModel(sequelize),
    pharmacy: pharmacyModel(sequelize),
    medicine: medicineModel(sequelize),
    prescription: prescriptionModel(sequelize),
    sequelize: sequelize
};
 
models.Sequelize = Sequelize;

export const testDB = (async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    }
})();

export default models;