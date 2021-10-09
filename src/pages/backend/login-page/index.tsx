import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import AdminLoginService from 'services/backend/login';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';
const AdminLoginPage = () => {
  const history = useHistory();
  const dateAddOneHour = new Date(Date.now() + 3600000);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const adminLoginService = new AdminLoginService();
  const login = async () => {
    try {
      const result: any = await adminLoginService.post({ email, password });
      if (result.data.role !== 'ADMIN') {
          console.log('cannot login in dashboard admin');
      }
      Cookies.set('access_token_admin', result.data.token, { expires: dateAddOneHour });
      history.push(ADMINROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Login</h3>
            </div>
            <div className="card-body">
            <div className="form-floating mb-3">
                  <Input
                    className="form-control"
                    type="email"
                    id="inputEmail"
                    onChange={(value) => setEmail(value)}
                    value={email}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <Input
                    className="form-control"
                    type="password"
                    id="inputPassword"
                    onChange={(value) => setPassword(value)}
                    value={password}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                  <a className="small" href="password.html">
                    {/* Forgot Password? */}
                  </a>
                  {/* <Input type="submit" className="btn btn-primary" onClick={login} /> */}
                  <input type="submit" className="btn btn-primary" onClick={login} />
                  {/* <a className="btn btn-primary" href="/#" onClick={login}>
                    Login
                  </a> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
