import { Input } from 'components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { USERROUTES } from 'routes';
import RegisterService from 'services/frontend/register';

const FormRegister = () => {
  const history = useHistory();
  const registerService = new RegisterService();
  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retypepassword, setRetypePassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const register = async () => {
    try {
      const data = await registerService.post({ fullname, email, password, retypepassword, phoneNumber, address});
      console.log(data);
      history.push(USERROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Fullname
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputFullname"
          type="text"
          value={fullname}
          placeholder="Enter your fullname"
          onChange={(value) => setFullname(value)}
        />
      </div>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Email Address
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputEmail"
          type="email"
          value={email}
          placeholder="Enter your email addres"
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Password
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputPassword"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(value) => setPassword(value)}
        />
       
      </div>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Retype password
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputRetypePassword"
          type="password"
          value={retypepassword}
          placeholder="Enter your password"
          onChange={(value) => setRetypePassword(value)}
        />
        
      </div>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Phone Number
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputPhoneNumber"
          type="text"
          value={phoneNumber}
          placeholder="Enter your phone number"
          onChange={(value) => setPhoneNumber(value)}
        />
      </div>
      <div className="form-group">
        <label className="headings4--semibold font-color--orange register__register-form-subtitle">
          Address
        </label>
        <Input
          className="form-control form-control-user register__register-form-input"
          id="exampleInputAddress"
          type="text"
          value={address}
          placeholder="Enter your address"
          onChange={(value) => setAddress(value)}
        />
      </div>
      <input type="submit" value="SIGN UP" className="btn btnsubmit" onClick={register} />
      <div className="register__register-form-invitesignin">
        <span className="headings4--semibold">Already have an account ?</span>{' '}
        <a href="/">
          <span className="headings4--semibold font-color--orange">
            Sign in now
          </span>
        </a>
      </div>
    </>
  );
};

export default FormRegister;
