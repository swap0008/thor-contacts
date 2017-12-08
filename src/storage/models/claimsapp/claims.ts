/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {claimsInstance, claimsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<claimsInstance, claimsAttribute>('claims', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    _json: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    primary_tag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sub_tag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comm_tag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    claim_manager: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'claims'
  });
};
