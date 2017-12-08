/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {case_detailsInstance, case_detailsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<case_detailsInstance, case_detailsAttribute>('case_details', {
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
    case_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    case_meta_data: {
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
    tableName: 'case_details'
  });
};
