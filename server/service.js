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