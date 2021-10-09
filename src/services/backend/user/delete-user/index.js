import { BaseService } from 'services';

class DeleteUserService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BASE_URL}/delete-user`);
    }
}

export default DeleteUserService;
