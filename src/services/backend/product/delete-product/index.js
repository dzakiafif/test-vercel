import { BaseService } from "services";

class DeleteProductService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/delete-product`);
    }
}

export default DeleteProductService;
