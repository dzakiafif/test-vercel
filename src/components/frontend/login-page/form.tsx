import Cookies from 'js-cookie';
import { Input } from 'components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthBackendService from 'services/frontend/login';
import { USERROUTES } from 'routes';

const FormLogin = () => {
  const history = useHistory();
  const dateAddOneHour = new Date(Date.now() + 3600000);
  const authBackendService = new AuthBackendService();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    try {
      const result: any = await authBackendService.post({ email, password });
      if (result.data.role === 'SUPER USER') {
        Cookies.set('access_token_admin', result.data.token, {
          expires: dateAddOneHour,
        });
        history.push(USERROUTES.HOMEPAGE);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-group">
        <Input
          className="form-control form-control-user login__login-form-input"
          id="exampleInputEmail"
          type="email"
          value={email}
          placeholder="Enter your email addres"
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div className="form-group">
        <Input
          className="form-control form-control-user login__login-form-input"
          id="exampleInputPassword"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(value) => setPassword(value)}
        />
      </div>
      <input
        type="submit"
        value="Login"
        className="btn btn-primary btn-user btn-block"
        onClick={login}
      />
    </>
  );
};

export default FormLogin;
