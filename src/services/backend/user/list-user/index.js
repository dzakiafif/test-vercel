import { BaseService } from 'services';

class ListUserService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/list-user`);
    }
}

export default ListUserService;
