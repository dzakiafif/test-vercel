import { BaseService } from "services";

class CreateUserService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/create-user`);
    }
}

export default CreateUserService;
