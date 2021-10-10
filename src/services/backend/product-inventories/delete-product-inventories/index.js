import { BaseService } from "services";

class DeleteProductInventoriesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/delete-product-inventories`);
    }
}

export default DeleteProductInventoriesService;
