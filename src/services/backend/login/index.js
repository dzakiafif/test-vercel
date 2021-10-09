import { BaseService } from "services";

class AdminLoginService extends BaseService {
    constructor() {
        super(`${process.env.REACT_APP_BACKEND_URL}/login`);
    }
}

export default AdminLoginService;
