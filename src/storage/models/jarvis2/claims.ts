/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {claimsInstance, claimsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<claimsInstance, claimsAttribute>('claims', {
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
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'claims'
  });
};
