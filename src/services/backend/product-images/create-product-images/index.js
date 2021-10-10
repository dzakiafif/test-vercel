import { BaseService } from "services";

class CreateProductImagesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/create-product-image`);
    }
}

export default CreateProductImagesService;
