import { 
  LogoCompany, 
  ShoppingCart, 
  UserProfile, 
  DottedSquare, 
  BookImage, 
  LineTitle,
  FreeDeliveryIcon,
  PremiumQualityIcon,
  RefundIcon,
  WarrantyIcon,
  IllustrationFirst
} from "assets";

const HomePage = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand navbar-each-section" 
           href="/#"><img src={LogoCompany} alt="ini gambar logo company"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-each-section" id="navbarNav">
          <ul className="navbar-nav headings3--regular">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#jumbo">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Page1">Benefit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Page2">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#page3">Category</a>
            </li>
          </ul>
        </div>
        <div className=" navbar-nav ml-lg-auto">
          <a className="nav-link active" href="#Score"><img src={ShoppingCart} alt=""/></a>
          <a className="nav-link active" href="#footer"><img src={UserProfile} alt=""/></a>
        </div>
      </div>
    </nav>

    <section id="Page1" className="homepage-section1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 nopadding">
            <div className="homepage-section1__title">
              <span className="headings1--bold">Read Book</span>
              <br/>
              <span className="headings1--bolder font-color--orange">Change your life</span>
              <br/>
            </div>
            <div className="homepage-section1__title-description">
              <span className="headings3--regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.
              </span>
              <br/>
              <span>
                <a href="/#" className="btn btnsubmit--smallsized">Get Started</a>
              </span>
            </div>
            <div className="homepage-section1__subdescription-frame">
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange"> 
                  300M+
                </span>
                <span className="headings3--regular">
                  Transactions
                </span>
              </div>
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange"> 
                  1000
                </span>
                <span className="headings3--regular">
                  Happy Customers
                </span>
              </div>
              <div className="homepage-section1__subdescription-content">
                <span className="headings2--bold font-color--orange"> 
                  4.78
                </span>
                <span className="headings3--regular">
                  Rating Worldwide
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 nopadding">
            <div className="homepage-section1__book-image-frame">
                <div className="homepage-section1__book-image-circle">
                </div>
                  <div className="homepage-section1__dotted-squares--above">
                    <img src={DottedSquare} alt="gambar dotted"/>
                  </div>
                  <div className="homepage-section1__book-image">
                    <img src={BookImage} alt="gambar buku"/>
                  </div>
                  <div className="homepage-section1__dotted-squares--below">
                    <img src={DottedSquare} alt="gambar dotted 2"/>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Page2">
      <div className="homepage-section2">
      <div className="container-fluid nopadding">
        <div className="row">
          <div className="homepage-section2__title" >
            <span className="headings3--regular font-color--orange">
              Why Choose us ?
            </span>
          </div>
          <div className="homepage-section2__title">
            <span className="headings2--bolder">
              Over 200+ successfull purchasing
            </span> <br/>
            <span className="headings2--bolder">
              and still counting
            </span> <br/>
            <img src={LineTitle} alt="ini garis title"/>
          </div>
        </div>
      </div>
      <div className="container-fluid nopadding">
      <div className="row homepage-section2__cards">
        <div className="col-3 nopadding">
          <div className="homepage-section2__each-card sec2-card">
            <div className="homepage-section2__card-icon-header">
              <div className="homepage-section2__card-icon-square-frame">
                <img src={FreeDeliveryIcon} className="card-img-top" alt="ini FreeDeliveryIcon"/>
              </div>
            </div>
            <div className="homepage-section2__card-description">
              <span className="headings3--semibold">
                Free Delivery
              </span>
              <p className="headings4--regular">
                If you order above Rp 100,000, 
                we will deliver it for free
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 nopadding">
          <div className="homepage-section2__each-card sec2-card">
            <div className="homepage-section2__card-icon-header">
              <div className="homepage-section2__card-icon-square-frame">
                <img src={PremiumQualityIcon} className="card-img-top" alt="gambar PremiumQualityIcon"/>
              </div>
            </div>
            <div className="homepage-section2__card-description">
              <span className="headings3--semibold">
                Premium Quality
              </span>
              <p className="headings4--regular">
                We provide certified top quality 
                books for your need
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 nopadding">
          <div className="homepage-section2__each-card sec2-card">
            <div className="homepage-section2__card-icon-header">
              <div className="homepage-section2__card-icon-square-frame">
                <img src={RefundIcon} className="card-img-top" alt="ini RefundIcon"/>
              </div>
            </div>
            <div className="homepage-section2__card-description">
              <span className="headings3--semibold">
                100% Refund
              </span>
              <p className="headings4--regular">If our book dont meet your 
                expectation,you can refund it 
                after 3 days 
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 nopadding">
          <div className="homepage-section2__each-card sec2-card">
            <div className="homepage-section2__card-icon-header">
              <div className="homepage-section2__card-icon-square-frame">
                <img src={WarrantyIcon} className="card-img-top" alt="..."/>
              </div>
            </div>
            <div className="homepage-section2__card-description">
              <span className="headings3--semibold">
                Warranty
              </span>
              <p className="headings4--regular">We guarantee our books are very 
                exclusive for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>

    <section id="Page3">
      <div className="homepage-section3">
      <div className="container-fluid nopadding">
        <div className="row">
          <div className="col-6">
            <div className="homepage-section3__column-left">
              <div className="homepage-section3__title">
                <span className="headings3--regular font-color--orange" >
                  Operation
                </span>
                <br/>
                <span className="headings2--bolder">
                  Easy to order
                </span>
                <br/>
                <span className="headings2--bold font-color--orange">
                sit amet, consectetur
                </span>
              </div>
                <span className="headings3--regular">
                  Lorem ipsum dolor sit amet, consectetur 
                </span>
                <span>
                  <a href="/#" className="btn btnsubmit--smallsized">Get Started</a>
                </span>
            </div>
          </div>

          <div className="col-6 nopadding">
            <div className="homepage-section3__image-frame">
              <div className="homepage-section3__background-logo-circle"></div>
              <img src={IllustrationFirst} alt="ini IllustrationFirst"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
    );
};

export default HomePage;