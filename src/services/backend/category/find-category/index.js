import { BaseService } from "services";

class FindCategoryService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/find-category`);
    }
}

export default FindCategoryService;
