import config from '../app/config'
import jwt from 'jsonwebtoken';

function sign(data: any) {
    return jwt.sign({ admin: data }, config.jwt.jwt_secret!, {
        expiresIn: config.jwt.jwt_expire,
    })
}

function verify(token: string) {
    try {
        var decode = jwt.verify(token, config.jwt.jwt_secret!);
        return {
            error: null,
            admin: decode,
        }
    } catch (error) {
        console.log(' --------------------------- error', error);
        return {
            admin: null,
            error,
        }
    }
}

export {
    verify,
    sign
}