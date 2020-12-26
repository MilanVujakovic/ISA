import express from 'express';
import dotenv from 'dotenv';
import models from './models';

dotenv.config();    

const app = express();


const port = process.env.PORT || 3003;
(async () => {
    await models.sequelize.sync();
    console.log("All models were synchronized successfully.");
    app.listen(port, () => {
        console.log(`Server is up and listening on port ${port}`);
    });
})();

