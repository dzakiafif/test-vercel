import { BaseService } from "services";

class DeleteCategoryService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/delete-category`);
    }
}

export default DeleteCategoryService;
