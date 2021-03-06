const mongoose = require('mongoose');

const DB_PATH = "mongodb://localhost/test";
const User = mongoose.model('User', getSchema());
const IDS = ["name", "birth", "email", "phone", "password", "passport", "passportdate", "passportwho", "passportcode", "license", "licensedate"];

function getSchema(){
    return userSchema = new mongoose.Schema({
    name: String,
    birth: String,
    email: String,
    phone: String,
    password: String,
    passport: { name: String, who: String, date: String, code: String },
    license: { name: String, date: String }
});
}

function getRandomId() {
    return Math.floor(Math.random() * IDS.length);
}

async function checkUser(userData) {
    let errors = [];
    let index = 0;

    if(await (await User.find({email: userData.email})).length){
        console.log('user aleready exists');
        errors[index++] = {element: IDS[2], message: "Пользователь с такой почтой уже существует."};
    }
    // if(await (await User.find({email: userData.phone})).length){
    //     console.log('user aleready exists');
    //     errors[index++] = {element: IDS[3], message: "Пользователь с таким номером телефона уже существует."};
    // }
    // if(await (await User.find({email: userData.passport.name})).length){
    //     console.log('user aleready exists');
    //     errors[index++] = {element: IDS[4], message: "Пользователь с таким паспортом уже существует."};
    // }
    // if(await (await User.find({email: userData.license.name})).length){
    //     console.log('user aleready exists');
    //     errors[index++] = {element: IDS[8], message: "Пользователь с таким удостоверением уже существует."};
    // }

    return errors;
}

module.exports.connectDB = function() {
    mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('DB is ok'))
        .catch((e) => console.log('DB error: ' + e));
}

module.exports.saveUser = async function (userData) {
    const errors = await checkUser(userData);

    if(!errors.length) {
        console.log('saving');
        const newUser = new User(userData);
        await newUser.save();
        return 0;
    } else return errors;
}

module.exports.getAllUsers = async function(){
    return await User.find();
}

module.exports.findInUsers = async function(data){
    return await User.find(data);
}

