import { BaseService } from "services";

class FindProductImagesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/find-product-image`);
    }
}

export default FindProductImagesService;
