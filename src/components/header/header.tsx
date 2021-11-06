import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IProps {}

interface IState {
  isAuthorized?: boolean;
}

export default class Header extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isAuthorized: false
    };
  }
  

  render() {
    return (
      <header className="header-global">
        <nav
          id="navbar-main"
          aria-label="Primary navigation"
          className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary"
        >
          <div className="container position-relative">
            <a
              className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4"
              href="/"
            >
              <img
                className="navbar-brand-dark"
                src="./assets/img/brand/dark.svg"
                alt="Logo light"
              ></img>
              <img
                className="navbar-brand-light"
                src="./assets/img/brand/dark.svg"
                alt="Logo dark"
              ></img>
            </a>

            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a
                      href="/"
                      className="navbar-brand shadow-soft py-2 px-3 rounded border border-light"
                    >
                      <img
                        src="./assets/img/brand/dark.svg"
                        alt="Themesberg logo"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <span className="nav-link-inner-text">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <span className="nav-link-inner-text">Components</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    <span className="nav-link-inner-text">About</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                        <div className="nav-link" data-toggle="dropdown">
                            <span className="nav-link-inner-text">Pages</span>
                            <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </div>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="../../html/pages/about.html">About</a></li>
                            <li><a className="dropdown-item" href="../../html/pages/pricing.html">Pricing</a></li>
                            <li><a className="dropdown-item" href="../../html/pages/contact.html">Contact</a></li>
                           
                        </ul>
                    </li>
                
              </ul>
            </div>
            {/*   Authorisation Authentification  */}

            <div className="d-flex align-items-center">
              <AuthorisationView isAuthorized= {this.state.isAuthorized} /> 

              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const AuthorisationView = ({ isAuthorized }: IState) => {
  const AuthButtons = () => {
    console.log("is authorized" + isAuthorized)
    return (
      
      <React.Fragment>
        <Link to="/login" className="btn btn-primary text-secondary mr-3">
          <i className="fas fa-sign-in-alt"></i> Sign in
        </Link>

        <Link to="/signup" className="btn btn-primary  d-md-inline-block ">
          <i className="fas fa-user-plus"></i> Sign up
        </Link>
      </React.Fragment>
    );
  };

  const UserMenuPoint = () => {
    return (
      <a
        href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro"
        className="btn btn-primary text-secondary mr-3"
      >
        <i className="fas fa-user-alt"></i> User
      </a>
    );
  };

  const AuthMenuPoint = isAuthorized ? UserMenuPoint : AuthButtons;
  return <AuthMenuPoint />;
};
