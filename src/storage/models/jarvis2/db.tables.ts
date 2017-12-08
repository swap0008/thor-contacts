// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  email_campaigns:def.email_campaignsModel;
  claims_temp:def.claims_tempModel;
  claims:def.claimsModel;
  email_templates:def.email_templatesModel;
  users:def.usersModel;
  test2:def.test2Model;
  case_details:def.case_detailsModel;
  jarvis_users:def.jarvis_usersModel;
  claims_flight_data:def.claims_flight_dataModel;
  SequelizeMeta:def.SequelizeMetaModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    email_campaigns: seq.import(path.join(__dirname, './email_campaigns')),
    claims_temp: seq.import(path.join(__dirname, './claims_temp')),
    claims: seq.import(path.join(__dirname, './claims')),
    email_templates: seq.import(path.join(__dirname, './email_templates')),
    users: seq.import(path.join(__dirname, './users')),
    test2: seq.import(path.join(__dirname, './test2')),
    case_details: seq.import(path.join(__dirname, './case_details')),
    jarvis_users: seq.import(path.join(__dirname, './jarvis_users')),
    claims_flight_data: seq.import(path.join(__dirname, './claims_flight_data')),
    SequelizeMeta: seq.import(path.join(__dirname, './SequelizeMeta')),
  };
  return tables;
};
