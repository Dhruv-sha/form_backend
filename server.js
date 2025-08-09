const mongoose = require('mongoose');
const dotEnv = require('dotenv');

dotEnv.config({path: "./config.env"});
const app = require('./app');

const db = process.env.DB;

mongoose.connect(db).then(()=>{
    console.log("DB connection successful")
}).catch((err)=>{
    console.log(err);
});

const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`App running on port : ${port}`);
})