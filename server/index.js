const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 8000;

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



const app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('YES'))
    .catch(() => console.log('NOOOOO'));

setMiddlewares();

let ids = ["name", "birth", "email", "phone", "passport", "passportdate", "passportwho", "passportcode", "license", "licensedate"];

const User = mongoose.model('User', getSchema());

app.get('/', async (req, res) => {
    // if(ctr === ids.length) ctr = 0;
    const data = await User.find();
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    console.log(data);
    res.send(data);
    // res.send({correct: false, errorIn: ids[ctr++]});
});

app.post('/', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.json(JSON.stringify(req.body));
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
