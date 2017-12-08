/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {claims_tempInstance, claims_tempAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<claims_tempInstance, claims_tempAttribute>('claims_temp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    claim_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    flight_detail_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true
    },
    claim_meta_data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    claim_management: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'claims_temp'
  });
};
