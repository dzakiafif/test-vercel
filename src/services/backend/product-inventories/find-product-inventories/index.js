import { BaseService } from "services";

class FindProductInventoriesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/find-product-inventories`);
    }
}

export default FindProductInventoriesService;
