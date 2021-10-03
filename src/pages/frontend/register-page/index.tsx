const RegisterPage = () => {
    return(
        <div className="container-fluid register">
        <div className="row">
            <div className="register__register-form-frame col-4">
                
            </div>
            <div className="register__register-form-frame col-4">
                <form className="register__reduce-width" method="POST" action="">
                    <div className="register__register-form-title">
                        <span className="headings2 font-color--orange">Sign Up</span>
                        <span className="headings3--regular">Daftar dan bergabung dengan kami</span>
                    </div>
                    <div className="form-group">
                        <label className="headings4--semibold font-color--orange register__register-form-subtitle">Fullname</label>
                        <input
                          type="text"
                          className="form-control form-control-user register__register-form-input"
                          id="exampleInputFullname"
                          placeholder="Enter your fullname"
                          name="fullname"
                        />
                    </div>
                    <div className="form-group">
                      <label className="headings4--semibold font-color--orange register__register-form-subtitle">Email Address</label>
                      <input
                        type="email"
                        className="form-control form-control-user register__register-form-input"
                        id="exampleInputEmail"
                        placeholder="Enter your email address"
                        name="emailAddr"
                      />
                    </div>
                    <div className="form-group">
                      <label className="headings4--semibold font-color--orange register__register-form-subtitle" >Password</label>
                      <input
                        type="password"
                        className="form-control form-control-user register__register-form-input"
                        id="exampleInputPassword"
                        placeholder="Enter your password"
                        name="password"
                      />
                    </div>
                    <div className="form-group">
                        <label className="headings4--semibold font-color--orange register__register-form-subtitle" >Retype password</label>
                        <input
                          type="password"
                          className="form-control form-control-user register__register-form-input"
                          id="exampleInputRetypePassword"
                          placeholder="Retype your password"
                          name="retypePassword"
                        />
                    </div>
                    <div className="form-group">
                        <label className="headings4--semibold font-color--orange register__register-form-subtitle">Address</label>
                        <input
                          type="text"
                          className="form-control form-control-user register__register-form-input"
                          id="exampleInputAddress"
                          placeholder="Enter your address"
                          name="address"
                        />
                    </div>
                    <div className="form-group">
                        <label className="headings4--semibold font-color--orange register__register-form-subtitle">Date of Birth</label>
                        <input
                          type="text"
                          className="form-control form-control-user register__register-form-input"
                          id="exampleInputFullname"
                          placeholder="Enter your date of birth"
                          name="fullname"
                        />
                    </div>
                    <input type="submit" value="SIGN UP" className="btn btnsubmit"/>
                    <div className="register__register-form-invitesignin">
                        <span className="headings4--semibold">Already have an account ?</span> <a href="#"><span className="headings4--semibold font-color--orange">Sign in now</span></a>
                    </div>
                  </form>
            </div>
            <div className="register__register-form-frame col-4">
               
            </div>
        </div>
    </div> 
    )
}
export default RegisterPage;