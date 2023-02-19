import { Next } from "koa";
import { Context } from "vm";
import { verify } from "../../utils/auth";


function AuthMiddleAare(ctx: Context, next: Next) {
    const token = ctx.headers['authorization'];
    if (token !== '' && token !== undefined) {
        const { error, admin } = verify(token);
        console.log('------------------------token', error);

        if (error !== null) {
            ctx.body = {
                // @ts-ignore
                msg: error?.message,
                code: 4000,
            }
            return
        } else {
            return next();
        }
    }
    ctx.body = {
        msg: 'authorization not equal null.',
        code: 4000,
    }
}

export default AuthMiddleAare;