import { BaseService } from "services";

class CreateCategoryService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/create-category`);
    }
}

export default CreateCategoryService;
