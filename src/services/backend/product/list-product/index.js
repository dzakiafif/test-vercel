import { BaseService } from "services";

class ListProductService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/list-product`);
    }
}

export default ListProductService;
