import { BaseService } from "services";

class ListCategoryService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/list-category`);
    }
}

export default ListCategoryService;
