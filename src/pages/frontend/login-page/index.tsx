import { LoginImg } from 'assets';
import { FormLogin } from 'components';

const LoginPage = () => {
  return (
    <div className="container-fluid login">
      <div className="login__row-full row">
        <div className="login__column--left col-5">
          <div className="login__login-form-frame">
            <div className="login__login-form-title">
              <span className="headings2 font-color--orange">Sign In</span>
              <span className="headings3--regular">
                Masuk ke aplikasi untuk berbelanja buku
              </span>
            </div>
            <div className="login__reduce-width">
                <FormLogin />
            </div>
          </div>
        </div>

        <div className="login__column--right col-7">
          <div className="login__background-logo-frame">
            <div className="login__background-logo-circle"></div>
            <img src={LoginImg} alt="ini gambar"/>
          </div>
          <div>
            <span className="headings2 font-color--white">
              Shop Now,
              <br />
              We’ll deliver it to you
            </span>
            <br />
            <span className="headings3--regular font-color--white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
