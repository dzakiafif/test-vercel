import Cookies from 'js-cookie';
import { ChangeEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CreateUserService from 'services/backend/user/create-user';
import { ADMINROUTES } from 'routes';
import { Input } from 'components';

const CreateUserPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const token = Cookies.get('access_token_admin');
  const createUserService = new CreateUserService();
  const [password, setPassword] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');


  useEffect(() => {
      if (token === undefined) {
          history.push(ADMINROUTES.LOGIN);
      }
  })

  const create = async () => {
    try {
        if(token !== undefined) {
            const result: any = await createUserService.post({ email, password, fullname, address, phoneNumber }, { headers: { authorization: `Bearer ${token}` } });
            if (result.status === 'success') {
                history.push(ADMINROUTES.USER_LIST);
            }
        }else {
            history.push(ADMINROUTES.LOGIN);
        }
    } catch (err) {
        console.log(err);
    }
  }
  return (
    <div className="container">
      <h1 className="mt-4">Create User</h1>
      <div className="card">
        <div className="card-body">
          <div className="form-floating mb-3">
            <Input
              type="text"
              className="form-control"
              onChange={(value) => setEmail(value)}
              value={email}
              id="inputEmail"
            />
            <label htmlFor="inputEmail">Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <Input
              type="password"
              className="form-control"
              onChange={(value) => setPassword(value)}
              value={password}
              id="inputPassword"
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <Input
              type="text"
              className="form-control"
              onChange={(value) => setFullname(value)}
              value={fullname}
              id="inputFullname"
            />
            <label htmlFor="inputFullname">Fullname</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              rows={10}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setAddress(event.target.value)
              }
              value={address}
              id="inputAddress"
            />
            <label htmlFor="inputAddress">Address</label>
          </div>
          <div className="form-floating-mb-3">
            <Input
              type="text"
              className="form-control"
              onChange={(value) => setPhoneNumber(value)}
              value={phoneNumber}
              id="inputPhoneNumber"
            />
            <label htmlFor="inputPhoneNumber">Phone Number</label>
          </div>
        </div>
        <div className="card-footer py-3">
              <div className="small">
                  <input type="submit" className="btn btn-primary" onClick={create} />
              </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserPage;
