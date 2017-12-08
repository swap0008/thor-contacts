import * as cmd from 'node-cmd';
const env = process.env.NODE_ENV || 'development';
import {config} from '../config';

// Install required npm packages
function installNPMs() {
  const cmd_str = 'sudo npm install sequelize-auto pg@6.4.1 -g';
  console.log(`Installing NPMs like sequelize-auto and pg: ${cmd_str}`);

  cmd.get(cmd_str, (err: any, data: any, stderr: any) => {
    console.log(err, data, stderr);
  });
}

// Download model defintions
const downloadModelsDefinition = (dir_name: any, db: any, db_tables: any) => {
  const dialect = 'postgres';
  const dir = `./models/${dir_name}`;

  // -z is required for typescript
  // location should be after sequelize-auto
  let cmd_string = `sequelize-auto -z -o "${dir}" -d ${db['database']} -h ${
    db['host']
  } -u ${db['username']} -p ${db['port']} -x ${db['password']} -e ${dialect}`;

  // if specific tables are specified. Otherwise, import all
  if (db_tables && db_tables.length !== 0) {
    const db_tables_string = db_tables.join(',');
    cmd_string = `${cmd_string} --tables ${db_tables_string}`;
  }

  console.log(cmd_string);

  cmd.get(cmd_string, (err: any, data: any, stderr: any) => {
    console.log(err, data, stderr);
  });
};

// Main Database (used for Instalocate Flightbot and Website)
const downloadModelsFromMainDB = () => {
  const db_conf = config[env]['db_main'];
  const db_tables = [];
  const models_dir = 'maindb';
  downloadModelsDefinition(models_dir, db_conf, db_tables);
};

// Claims App Database (used for compensation claims app)
const downloadModelsFromClaimsAppDB = () => {
  const db_conf = config[env]['db_claimsapp'];
  const db_tables = [];
  const models_dir = 'claimsapp';
  downloadModelsDefinition(models_dir, db_conf, db_tables);
};

const downloadModelsFromJarvis2 = () => {
  const db_conf = config[env]['jarvis2'];
  const db_tables = [];
  const models_dir = 'jarvis2';
  downloadModelsDefinition(models_dir, db_conf, db_tables);
};

// Main Function
const main = () => {
  // installNPMs();
  downloadModelsFromMainDB();
  downloadModelsFromClaimsAppDB();
  downloadModelsFromJarvis2();
};

main();
