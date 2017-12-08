// tslint:disable
import * as Sequelize from 'sequelize';


// table: emps
export interface empsAttribute {
  firstname?:string;
  lastname?:string;
}
export interface empsInstance extends Sequelize.Instance<empsAttribute>, empsAttribute { }
export interface empsModel extends Sequelize.Model<empsInstance, empsAttribute> { }

// table: auth
export interface authAttribute {
  id:number;
  email?:string;
  password?:string;
  role?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface authInstance extends Sequelize.Instance<authAttribute>, authAttribute { }
export interface authModel extends Sequelize.Model<authInstance, authAttribute> { }

// table: Listings
export interface ListingsAttribute {
  id:number;
  title?:string;
  description?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface ListingsInstance extends Sequelize.Instance<ListingsAttribute>, ListingsAttribute { }
export interface ListingsModel extends Sequelize.Model<ListingsInstance, ListingsAttribute> { }

// table: jarvis_users
export interface jarvis_usersAttribute {
  id:number;
  email?:string;
  password?:string;
  role?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface jarvis_usersInstance extends Sequelize.Instance<jarvis_usersAttribute>, jarvis_usersAttribute { }
export interface jarvis_usersModel extends Sequelize.Model<jarvis_usersInstance, jarvis_usersAttribute> { }

// table: compensation_webform
export interface compensation_webformAttribute {
  id:number;
  timestamp?:number;
  payload?:any;
  data_for_specified_date?:any;
  data_around_specified_date?:any;
  email_sent?:any;
  status?:string;
  createdAt:Date;
  updatedAt:Date;
  remarks?:string;
  meta_data?:any;
  primary_tag?:string;
  followup_mode?:string;
}
export interface compensation_webformInstance extends Sequelize.Instance<compensation_webformAttribute>, compensation_webformAttribute { }
export interface compensation_webformModel extends Sequelize.Model<compensation_webformInstance, compensation_webformAttribute> { }
