import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import {config} from '../../config';

// Read and Initialize
function readFilesAndInitialize(db_conf: any, models_dir_name: any) {

    const sequelize = new Sequelize(db_conf['database'], db_conf['username'], db_conf['password'], {
        host: db_conf['host'],
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        // logging: false,
    });

    const db = {};
    const models_directory_path = __dirname + '/' + models_dir_name;
    fs
        .readdirSync(models_directory_path)
        .filter(function(file) {
            return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'db.tables.js');
        })
        .forEach(function(file) {
            const model = sequelize.import(path.join(models_directory_path, file));

            db[model['name']] = model;
            // db[model.name].sync();
        });

    Object.keys(db).forEach(function(modelName) {
        if ('associate' in db[modelName]) {
            db[modelName].associate(db);
        }
    });

    db['sequelize'] = sequelize;
    db['Sequelize'] = Sequelize;

    // db.users = require('./jarvis2/users')(sequelize, Sequelize);
    // db.claims = require('./jarvis2/claims')(sequelize, Sequelize);
    //
    // db.users.hasMany(db.claims, {foreignKey: 'user_id', target: 'user_id'});
    // db.claims.belongsTo(db.users, {foreignKey: 'user_id', target: 'user_id'});


    return db;
}

// Read and Initialize
function constructAllModels() {

    const Models = {};
    // console.log(Models);
    const db_main_conf = config[env]['db_main'];
    Models['Main'] = readFilesAndInitialize(db_main_conf, 'maindb');

    const db_claimsapp_conf = config[env]['db_claimsapp'];
    Models['ClaimsApp'] = readFilesAndInitialize(db_claimsapp_conf, 'claimsapp');

    const jarvis2 = config[env]['jarvis2'];
    Models['Jarvis2'] = readFilesAndInitialize(jarvis2, 'jarvis2');
    // console.log(Models);
    return Models;
}

// constructAllModels();

module.exports = constructAllModels();
