import { BaseService } from "services";

class UpdateProductImagesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/delete-product-image`);
    }
}

export default UpdateProductImagesService;
