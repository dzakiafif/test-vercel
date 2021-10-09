import { BaseService } from 'services';

class FindUserService extends BaseService {
    constructor(){
        super(`${process.env.REACT_APP_BACKEND_URL}/find-user`);
    }
}

export default FindUserService;
