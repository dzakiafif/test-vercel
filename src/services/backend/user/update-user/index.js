import { BaseService } from 'services';

class UpdateUserService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/update-user`);
    }
}

export default UpdateUserService;
