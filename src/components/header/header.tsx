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
      isAuthorized: false,
    };
  }

  render() {
    return (
      <header className="header-global">
      <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">
          <div className="container position-relative">
              <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="./index.html">
                  <img className="navbar-brand-dark" src="./assets/img/brand/dark.svg" alt="Logo light"/>
                  <img className="navbar-brand-light" src="./assets/img/brand/dark.svg" alt="Logo dark"/>
              </a>
              <div className="navbar-collapse collapse" id="navbar_global">
                  <div className="navbar-collapse-header">
                      <div className="row">
                          <div className="col-6 collapse-brand">
                              <a href="./index.html" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                                  <img src="./assets/img/brand/dark.svg" alt="Themesberg logo"/>
                              </a>
                          </div>
                          <div className="col-6 collapse-close">
                              <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                          </div>
                      </div>
                  </div>
                  <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                      <li className="nav-item ">
                          <Link to="/" className="nav-link" >
                              <span className="nav-link-inner-text">Home</span>                              
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/about" className="nav-link"  >
                              <span className="nav-link-inner-text">About</span>                              
                          </Link>
                          
                      </li>
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link" data-toggle="dropdown" >
                              <span className="nav-link-inner-text">Support</span>
                              <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-lg">
                              <div className="col-auto px-0" data-dropdown-content>
                                  <div className="list-group list-group-flush">
                                      <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                          <span className="icon icon-sm icon-secondary"><span className="fas fa-file-alt"></span></span>
                                          <div className="ml-4">
                                              <span className="text-dark d-block">Documentation<span className="badge badge-sm badge-secondary ml-2">v1.0</span></span>
                                              <span className="small">Examples and guides</span>
                                          </div>
                                      </a>
                                      <a href="https://github.com/themesberg/th-neumorphism-ui-pro/issues" target="_blank" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                          <span className="icon icon-sm icon-secondary"><span className="fas fa-microphone-alt"></span></span>
                                          <div className="ml-4">
                                              <span className="text-dark d-block">Support</span>
                                              <span className="small">Looking for answers? Ask us!</span>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="d-flex align-items-center">
                  <a href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro" target="_blank" className="btn btn-primary text-secondary mr-3"><i className="far fa-paper-plane mr-2"></i> Upgrade to PRO</a>
                  <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank" className="btn btn-primary d-none d-md-inline-block"><i className="fas fa-book"></i> Docs v1.0</a>
                  <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
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
      <Link
        to="https://themesberg.com/product/ui-kits/neumorphism-ui-pro"
        className="btn btn-primary text-secondary mr-3"
      >
        <i className="fas fa-user-alt"></i> User
      </Link>
    );
  };

  const AuthMenuPoint = isAuthorized ? UserMenuPoint : AuthButtons;
  return <AuthMenuPoint />;
};
