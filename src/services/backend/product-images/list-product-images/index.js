import { BaseService } from "services";

class ListProductImagesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/list-product-image`);
    }
}

export default ListProductImagesService;
