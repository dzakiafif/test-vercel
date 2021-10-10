import { BaseService } from "services";

class DeleteProductImagesService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/delete-product-image`);
    }
}

export default DeleteProductImagesService;
