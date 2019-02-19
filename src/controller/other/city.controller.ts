import { Logging } from './../../services/logging.service';
import { ErrorHandlingService } from '../../services/error-handling.service';
import { DataAccessService } from './../../services/data-access.service';

var vEnv = require('../../config/mode.json')['mode'];
var vConfig = require('../../config/config.json')[vEnv];

export class OtherController{
    constructor(){
        Logging('Initialize Other Controller');
    }

    async getCityList(pRequest:any, pResponse:any) {
        try {
            let payload = await DataAccessService.executeSP('city_get',undefined);

            pResponse.status(200).send(payload);
        }
        catch (err) {
            if (err.code){
                ErrorHandlingService.throwHTTPErrorResponse(pResponse, 500, err.code, err.desc);
            }
            else{
                ErrorHandlingService.throwHTTPErrorResponse(pResponse, 500, 4000, 'General error : ' + err);
            }
        }
    }

    async getModeAndAppVersion(pRequest:any, pResponse:any) {
        try {
            let result:any = {
                mode: vEnv,
                appVersion: "0.1.0"
            };

            pResponse.status(200).send(result);
        }
        catch (err) {
            if (err.code){
                ErrorHandlingService.throwHTTPErrorResponse(pResponse, 500, err.code, err.desc);
            }
            else{
                ErrorHandlingService.throwHTTPErrorResponse(pResponse, 500, 4000, 'General error : ' + err);
            }
        }
    }
}