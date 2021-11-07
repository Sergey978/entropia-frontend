import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IProps { }

interface IState {
  isAuthorized?: boolean;
}

export default class Header extends Component<IProps, IState> {

  //function for proper working mobile view
  onMenuItemClick = () =>{
    document.getElementById('navbar_global')?.classList.remove("show");
  }

  constructor(props: IProps) {
    super(props);

    this.state = {
      isAuthorized: true,
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
            <Link
              className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4"
              to="/"
            >
              <img
                className="navbar-brand-dark"
                src="./assets/img/brand/dark.svg"
                alt="Logo light"
              />
              <img
                className="navbar-brand-light"
                src="./assets/img/brand/dark.svg"
                alt="Logo dark"
              />
            </Link>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <Link to="/" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light"  >
                      <img src="./assets/img/brand/dark.svg" alt="Themesberg logo" />
                    </Link>
                  </div>
                  <div className="col-6 collapse-close">
                    <Link
                      to="#"
                      className="fas fa-times"
                      data-toggle="collapse"
                      data-target="#navbar_global"
                      aria-controls="navbar_global"
                      aria-expanded="false"
                      title="close"
                      aria-label="Toggle navigation"
                    ></Link>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center" onClick = {this.onMenuItemClick}>
                <li className="nav-item ">
                  <Link to="/" className="nav-link " >
                    <span className="nav-link-inner-text">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    <span className="nav-link-inner-text">About</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/" className="nav-link" data-toggle="dropdown" >
                    <span className="nav-link-inner-text">Items</span>
                    <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li  ><Link className="dropdown-item" to="/select-items" 
                    onClick = {this.onMenuItemClick}>Select Items</Link></li>                    
                    <li><Link className="dropdown-item" to="/custom-items">Custom Items </Link></li>
                    <li><Link className="dropdown-item" to="/graph-page">Graph</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
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
