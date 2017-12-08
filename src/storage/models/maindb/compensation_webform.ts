/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {compensation_webformInstance, compensation_webformAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<compensation_webformInstance, compensation_webformAttribute>('compensation_webform', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    payload: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    data_for_specified_date: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    data_around_specified_date: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    email_sent: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
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
    meta_data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    primary_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    followup_mode: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'compensation_webform'
  });
};
