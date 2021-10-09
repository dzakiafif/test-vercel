import Cookies from 'js-cookie';
import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Input } from 'components';
import { ADMINROUTES } from 'routes';
import FindUserService from 'services/backend/user/find-user';
import UpdateUserService from 'services/backend/user/update-user';
interface UpdateUserProps {
  id: string;
}
const UpdateUserPage = () => {
  const { id } = useParams<UpdateUserProps>();
  const updateUserService = new UpdateUserService();
  const history = useHistory();
  const [password, setPassword] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const fetchApi = useCallback(async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const findUserService = new FindUserService();
      const result: any = await findUserService.getById(
        id,
        {},
        { authorization: `Bearer ${token}` }
      );
      if (result.status === 'success') {
        setFullname(result.data.fullname);
        setAddress(result.data.address);
        setPhoneNumber(result.data.phone_number);
      }
    } else {
      history.push(ADMINROUTES.LOGIN);
    }
  }, [id, history]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const update = async () => {
    const token = Cookies.get('access_token_admin');
    if (token !== undefined) {
      const result: any = await updateUserService.put(id, {
        fullname,
        password,
        address,
        phoneNumber,
      }, { headers: { authorization: `Bearer ${token}` } });
      if(result.status === 'success') {
          history.push(ADMINROUTES.USER_LIST);
      }
    }else{
        history.push(ADMINROUTES.LOGIN);
    }
  };
  return (
    <div className="container">
      <h1 className="mt-4">Create User</h1>
      <div className="card">
        <div className="card-body">
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
            <input type="submit" className="btn btn-primary" onClick={update} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserPage;
