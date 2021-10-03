import { BaseService } from 'services';

class RegisterService extends BaseService {
  constructor() {
    super(`${process.env.REACT_APP_BACKEND_URL}/register`);
  }
}

export default RegisterService;
