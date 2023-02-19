import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import { dbLog } from '../logger';

const sequelize = new Sequelize(config.db.dbName!, config.db.dbUser!, config.db.dbPass, {
    host: config.db.dbHost,
    dialect: "mysql",
    port: config.db.dbPort as any,
    models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')],
    logging: (msg) => {
        dbLog.info(msg);
    },
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
});

const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('connect success 12');
    } catch (error) {
        console.error('unable to connect databse', error);
    }
}

export default db;