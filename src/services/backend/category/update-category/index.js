import { BaseService } from "services";

class UpdateCategoryService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/update-category`);
    }
}

export default UpdateCategoryService;
