import { FormRegister } from 'components';
const RegisterPage = () => {
  return (
    <div className="container-fluid register">
      <div className="row">
        <div className="register__register-form-frame col-4"></div>
        <div className="register__register-form-frame col-4">
          <div className="register__register-form-title">
            <span className="headings2 font-color--orange">Sign Up</span>
            <span className="headings3--regular">
              Daftar dan bergabung dengan kami
            </span>
          </div>
          <div className="register__reduce-width">
            <FormRegister/>
          </div>
        </div>
        <div className="register__register-form-frame col-4"></div>
      </div>
    </div>
  );
};
export default RegisterPage;
