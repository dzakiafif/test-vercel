import { BaseService } from "services";

class CreateProductInventoriesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/create-product-inventories`);
    }
}

export default CreateProductInventoriesService;
