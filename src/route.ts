import {Token} from './services/token.service';
import {LoginController} from './controller/login/login.controller';
import { DriverController } from './controller/driver/driver.controller';
import { CustomerController } from './controller/customer/customer.controller';
import { OrderController } from './controller/order/order.controller';
import { CorporateController } from './controller/corporate/corporate.controller';

export function Routing(router:any){
    const tokenService: Token = new Token();

    const driverController:DriverController = new DriverController();
    router.post('/driver/registerdriver',driverController.registerDriver);
    router.get('/driver/detail/:driverid',driverController.getDriverDetails);

    const customerController:CustomerController = new CustomerController();
    router.post('/customer/finddriver',customerController.findDriver);

    const loginController: LoginController = new LoginController();
    router.post('/login/authorization',loginController.authorize);

    const orderCtrl:OrderController = new OrderController();
    router.put('/order/cancelorder',orderCtrl.CancelOrder);

    const corporateCtrl:CorporateController = new CorporateController();
    router.post('/corporate/getcorporatelist',corporateCtrl.getCorporateListPaging);
    router.post('/corporate/corporate',corporateCtrl.addCorporate);
    router.put('/corporate/corporate',corporateCtrl.updateCorporate);
}
