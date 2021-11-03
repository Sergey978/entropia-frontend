import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {


    state = {
        isAuthorized: false
    }

    const

    render() {

        return (
            <header className="header-global">
                <nav id="navbar-main" aria-label="Primary navigation"
                    className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">
                    <div className="container position-relative">
                        <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="/">
                            <img className="navbar-brand-dark" src="./assets/img/brand/dark.svg" alt="Logo light"></img>
                            <img className="navbar-brand-light" src="./assets/img/brand/dark.svg" alt="Logo dark"></img>
                        </a>

                        <div className="navbar-collapse collapse" id="navbar_global">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="/" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                                            <img src="./assets/img/brand/dark.svg" alt="Themesberg logo"></img>
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global"
                                            aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                                    </div>
                                </div>
                            </div>

                            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                                <li className="nav-item">
                                    <a href="/" className="nav-link" >
                                        <span className="nav-link-inner-text">Home</span>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" data-toggle="dropdown">
                                        <span className="nav-link-inner-text">Components</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" data-toggle="dropdown">
                                        <span className="nav-link-inner-text">About</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/*   Authorisation Authentification  */}

                        <div className="d-flex align-items-center">
                            <AuthorisationView state={this.state} />


                            <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global"
                                aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header >
        );

    }

};

const AuthorisationView = ({ state }) => {

    const { isAuthorized } = state;


    const AuthButtons = () => {

        return (
            <React.Fragment>
                <Link to="/login"
                    className="btn btn-primary text-secondary mr-3"><i className="fas fa-sign-in-alt"></i> Sign in</Link>

                <Link to="/signup"
                    className="btn btn-primary  d-md-inline-block "><i className="fas fa-user-plus"></i> Sign up</Link>
            </React.Fragment>
        );
    }

    const UserMenuPoint = () => {
        return (
            <a href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro"
                className="btn btn-primary text-secondary mr-3"><i class="fas fa-user-alt"></i> User</a>
        )
    }

    const AuthMenuPoint = isAuthorized ? UserMenuPoint : AuthButtons;
    return (
        <AuthMenuPoint />
    );

}