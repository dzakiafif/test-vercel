import { BaseService } from "services";

class CreateProductService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/create-product`);
    }
}

export default CreateProductService;
