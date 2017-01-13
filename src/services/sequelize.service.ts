import {Logging} from './logging.service';
var vEnv = require('../config/mode.json')['mode'];
const vConfig = require('../config/config.json')[vEnv];
var vSequelize = require("sequelize");
var vFs = require('fs');
var vToday = Date.now();
var vDate = new Date(vToday);

export class SequelizeService {
	public static sequelize;

	constructor(){
		try{
			Logging("initialize sequelize service");
			SequelizeService.sequelize = new vSequelize(
				vConfig.db.name, 
				vConfig.db.username, 
				vConfig.db.password,
				{
					dialect : vConfig.db.dialect,
					host    : vConfig.db.host,
					port	: vConfig.db.port,
					timezone : vConfig.db.timezone,
					dialectOptions : vConfig.db.dialectOptions,
				});
		}catch(pErr){
			Logging('Error while establishing database connection with sequelize : ' + pErr);
			throw 401;
		}
	}
}