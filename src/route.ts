import { Token } from './services/token.service';
import { DriverController } from './controller/driver/driver.controller';
import { CustomerController } from './controller/customer/customer.controller';
import { OrderController } from './controller/order/order.controller';
import { CorporateController } from './controller/corporate/corporate.controller';
import { UserController } from './controller/user/user.controller';
import { CarController } from './controller/car/car.controller';
import { LoginController } from './controller/login/login.controller';
import { OtherController } from './controller/other/city.controller';


export function Routing(router:any){
    const tokenService: Token = new Token();
    
    const otherCtrl:OtherController = new OtherController();
    router.get('/app/getversion',otherCtrl.getModeAndAppVersion);
}
