import express from 'express'
import dotenv from 'dotenv'

dotenv.config();    

const app = express();


const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});