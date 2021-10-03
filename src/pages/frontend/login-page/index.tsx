import { LoginImg } from 'assets';
import FormLogin from 'components/frontend/login-page/form';

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
            <form className="login__reduce-width" method="POST" action="">
                <FormLogin />
              {/* <div className="form-group">
                <label className="headings4--semibold font-color--orange login__login-form-subtitle">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control form-control-user login__login-form-input"
                  id="exampleInputEmail"
                  placeholder="Enter your email address"
                  name="emailAddr"
                />
              </div>
              <div className="form-group">
                <label className="headings4--semibold font-color--orange login__login-form-subtitle">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-user login__login-form-input"
                  id="exampleInputPassword"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>
              <input type="submit" value="SIGN IN" className="btn btnsubmit" />
              <div className="login__login-form-invitesignup">
                <span className="headings4--semibold">
                  Dont have an account yet ?
                </span>{' '}
                <a href="#">
                  <span className="headings4--semibold font-color--orange">
                    Create an account
                  </span>
                </a>
              </div> */}
            </form>
          </div>
        </div>

        <div className="login__column--right col-7">
          <div className="login__background-logo-frame">
            <div className="login__background-logo-circle"></div>
            <Image src={LoginImg} />
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
