/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {claims_flight_dataInstance, claims_flight_dataAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<claims_flight_dataInstance, claims_flight_dataAttribute>('claims_flight_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    flight_detail_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    airline_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flight_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_of_departure: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flight_data: {
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
    tableName: 'claims_flight_data'
  });
};
