const config = {
    server: {
        prot: process.env.SERVER_PORT,
    },
    db: {
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        dbUser: process.env.DB_USER,
        dbPass: process.env.DB_PASSWORD,
        dbPort: process.env.DB_PORT,
    },
    log: {
        appenders: { cheese: { type: "file", filename: "logs/cheese.log" }, access: { type: "file", filename: "logs/access.log" }, db: { type: "file", filename: "logs/db.log" } },
        categories: { default: { appenders: ["cheese"], level: "info" }, access: { appenders: ["access"], level: "info" }, db: { appenders: ["db"], level: "info" } },
    },
    jwt: {
        jwt_secret: process.env.JWT_SECRET,
        jwt_expire: process.env.JW_EXPIRE
    }
}


export default config;