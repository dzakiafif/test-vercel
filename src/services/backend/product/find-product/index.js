import { BaseService } from "services";

class FindProductService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/find-product`);
    }
}

export default FindProductService;
