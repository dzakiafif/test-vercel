import { BaseService } from 'services';

class LoginService extends BaseService {
  constructor() {
    super(`${process.env.REACT_APP_BACKEND_URL}/login`);
  }
}

export default LoginService;
