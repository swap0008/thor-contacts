// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  emps:def.empsModel;
  auth:def.authModel;
  Listings:def.ListingsModel;
  jarvis_users:def.jarvis_usersModel;
  compensation_webform:def.compensation_webformModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    emps: seq.import(path.join(__dirname, './emps')),
    auth: seq.import(path.join(__dirname, './auth')),
    Listings: seq.import(path.join(__dirname, './Listings')),
    jarvis_users: seq.import(path.join(__dirname, './jarvis_users')),
    compensation_webform: seq.import(path.join(__dirname, './compensation_webform')),
  };
  return tables;
};
