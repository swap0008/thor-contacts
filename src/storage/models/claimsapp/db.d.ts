// tslint:disable
import * as Sequelize from 'sequelize';


// table: api_data
export interface api_dataAttribute {
  id:number;
  claim_id?:string;
  api_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface api_dataInstance extends Sequelize.Instance<api_dataAttribute>, api_dataAttribute { }
export interface api_dataModel extends Sequelize.Model<api_dataInstance, api_dataAttribute> { }

// table: users
export interface usersAttribute {
  user_id:string;
  email?:string;
  name?:string;
  picture?:string;
  _json?:any;
  createdAt:Date;
  updatedAt:Date;
  id?:string;
  addresses?:any;
}
export interface usersInstance extends Sequelize.Instance<usersAttribute>, usersAttribute { }
export interface usersModel extends Sequelize.Model<usersInstance, usersAttribute> { }

// table: email_templates
export interface email_templatesAttribute {
  id:number;
  name?:string;
  type?:string;
  _json?:any;
  createdAt:Date;
  updatedAt:Date;
}
export interface email_templatesInstance extends Sequelize.Instance<email_templatesAttribute>, email_templatesAttribute { }
export interface email_templatesModel extends Sequelize.Model<email_templatesInstance, email_templatesAttribute> { }

// table: n
export interface nAttribute {
  id:number;
  name?:string;
  type?:string;
  _json?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface nInstance extends Sequelize.Instance<nAttribute>, nAttribute { }
export interface nModel extends Sequelize.Model<nInstance, nAttribute> { }

// table: email_campaigns
export interface email_campaignsAttribute {
  id:number;
  campaign_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
  claim_id?:string;
}
export interface email_campaignsInstance extends Sequelize.Instance<email_campaignsAttribute>, email_campaignsAttribute { }
export interface email_campaignsModel extends Sequelize.Model<email_campaignsInstance, email_campaignsAttribute> { }

// table: claims
export interface claimsAttribute {
  id:string;
  _json?:any;
  user_id?:string;
  createdAt:Date;
  updatedAt:Date;
  remarks?:string;
  primary_tag?:string;
  sub_tag?:string;
  comm_tag?:string;
  claim_manager?:string;
}
export interface claimsInstance extends Sequelize.Instance<claimsAttribute>, claimsAttribute { }
export interface claimsModel extends Sequelize.Model<claimsInstance, claimsAttribute> { }

// table: case_details
export interface case_detailsAttribute {
  id:number;
  claim_id?:string;
  case_details?:string;
  case_meta_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
}
export interface case_detailsInstance extends Sequelize.Instance<case_detailsAttribute>, case_detailsAttribute { }
export interface case_detailsModel extends Sequelize.Model<case_detailsInstance, case_detailsAttribute> { }
