const DAO = require('./DAO.js');

module.exports.processUser = async function(req) {
    const errors = await DAO.saveUser(req.body);

    if(!errors) {
        return{
            status: 200,
            body: { status: 'ok' }
        }
    } else {
        return{
            status: 206,
            body: errors
        }
    }
}

module.exports.validate = async function(req) {
    let user = await DAO.findInUsers(req);
    console.log(user);
    return {status: 418, body: {hello: "world"}};
}