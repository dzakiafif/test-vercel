import { BaseService } from "services";

class ListProductInventoriesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/list-product-inventories`);
    }
}

export default ListProductInventoriesService;
