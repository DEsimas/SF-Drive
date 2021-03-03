const mongoose = require('mongoose');

const DB_PATH = "mongodb://localhost/test";
const User = mongoose.model('User', getSchema());
const IDS = ["name", "birth", "email", "phone", "passport", "passportdate", "passportwho", "passportcode", "license", "licensedate"];

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

function getRandomId() {
    return Math.floor(Math.random() * IDS.length);
}

async function checkUser(userData) {
    // return [
    //         { element: IDS[getRandomId()], message: "just test" },
    //         { element: IDS[getRandomId()], message: "i want to sleep lol"}
    //     ];
    let errors = [];
    let index = 0;

    if(await User.find({email: userData.email})){
        console.log('user aleready exists');
        errors[index++] = {element: IDS[2], message: "Пользователь с такой почтой уже существует."};
    }

    return errors;
}

module.exports.connectDB = function() {
    mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('DB is ok'))
        .catch((e) => console.log('DB error: ' + e));
}

module.exports.saveUser = async function (userData) {
    const errors = await checkUser(userData);

    if(!errors) {
        const newUser = new User(userData);
        await newUser.save();
        return 0;
    } else return errors;
}

module.exports.getAllUsers = async function(){
    return await User.find();
}

