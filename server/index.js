const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 8000;
const DB_PATH = "mongodb://localhost/test";
const WHITE_LIST = ["http://localhost:4200"];
const IDS = ["name", "birth", "email", "phone", "passport", "passportdate", "passportwho", "passportcode", "license", "licensedate"];

function setMiddlewares(){
    app.use(express.json());
    app.use(cors());
    app.use((request, response, next) => {
        let now = new Date()
        let hour = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} \n`
        console.log(data)
        next();
    });
}

function getSchema(){
    return userSchema = new mongoose.Schema({
    name: String,
    birth: String,
    email: String,
    phone: String,
    passport: { name: String, who: String, date: String, code: String },
    license: { name: String, date: String }
});
}

function connectDB() {
    mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('DB is ok'))
        .catch((e) => console.log('DB error: ' + e));
}

function getRandomId() {
    return Math.floor(Math.random() * IDS.length);
}

async function saveUser(userData) {

    const errors = await checkUser(userData);

    if(!errors) {
        const newUser = new User(userData);
        await newUser.save();
        return 0;
    } else return errors;
}

async function checkUser(userData) {
    // return [IDS[getRandomId()]];
    return 0;
}

const app = express();
connectDB();
setMiddlewares();
const User = mongoose.model('User', getSchema());

app.get('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", WHITE_LIST);
    const data = await User.find();
    res.send(data);
});

app.post('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", WHITE_LIST);
    console.log(req.body);
    // const errors = await saveUser(req.body);
    // if(!errors) {
    //     res.send(["cumgod"]);
    // }
    res.send({ status: 'ok'});
    
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
