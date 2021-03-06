const DAO = require('./DAO.js');
const JWT = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = 'ugiuoefht43u834u';
const ACCESS_TOKEN_LIFE = 1200;
const REFRESH_TOKEN_SECRET = 'ijdfger8u34u0894uj';
const REFRESH_TOKEN_LIFE = 43200;

const createTokens = function(payload){
    return{
        accessToken: JWT.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: ACCESS_TOKEN_LIFE}),
        refreshToken: JWT.sign({}, REFRESH_TOKEN_SECRET, {expiresIn: REFRESH_TOKEN_LIFE})
    }
}

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

module.exports.validate = async (req) => {
    let user = await DAO.findInUsers(req);
    console.log(user);
    if(user.length == 0) return {status: 404, body: {status: "user not found"}}
    else return { status: 200, body: createTokens(user[0].toJSON()) };
}