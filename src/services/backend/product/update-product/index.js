import { BaseService } from "services";

class UpdateProductService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/update-product`);
    }
}

export default UpdateProductService;
