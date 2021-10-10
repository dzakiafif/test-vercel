import { BaseService } from "services";

class UpdateProductInventoriesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/update-product-inventories`);
    }
}

export default UpdateProductInventoriesService;
