import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginPage = ({ isLoggedIn, onLogin }) => {


    if (isLoggedIn) {
        return <Redirect to="/" />;
    }


    return (
        <main>
            {/*<!-- Section -->*/}
            <section className="min-vh-100 d-flex bg-primary align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 justify-content-center">
                            <div className="card bg-primary shadow-soft border-light p-4">
                                <div className="card-header text-center pb-0">
                                    <h2 className="h4">Sign in to our plathtmlForm</h2>
                                </div>
                                <div className="card-body">
                                    <form action="#" className="mt-4">
                                        {/*<!-- htmlForm -->*/}
                                        <div className="htmlForm-group">
                                            <label htmlFor="exampleInputIcon3">Your email</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><span className="fas fa-envelope"></span></span>
                                                </div>
                                                <input className="htmlForm-control" id="exampleInputIcon3"
                                                    placeholder="example@company.com" type="text" aria-label="email adress"></input>
                                            </div>
                                        </div>
                                        {/*<!-- End of htmlForm -->*/}
                                        <div className="htmlForm-group">
                                            {/*<!-- htmlForm -->*/}
                                            <div className="htmlForm-group">
                                                <label htmlFor="exampleInputPassword6">Password</label>
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><span className="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input className="htmlForm-control" id="exampleInputPassword6"
                                                        placeholder="Password" type="password" aria-label="Password" required></input>
                                                </div>
                                            </div>
                                            {/*<!-- End of htmlForm -->*/}
                                            <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                                <div className="htmlForm-check">
                                                    <input className="htmlForm-check-input" type="checkbox" value="" id="defaultCheck5"></input>
                                                    <label className="htmlForm-check-label" htmlFor="defaultCheck5">
                                                        Remember me
                                                </label>
                                                </div>
                                                <div><a href="#" className="small text-right">Lost password?</a></div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                                    </form>
                                    <div className="mt-3 mb-4 text-center">
                                        <span className="font-weight-normal">or login with</span>
                                    </div>
                                    <div className="btn-wrapper my-4 text-center">
                                        <button className="btn btn-primary btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                            <span aria-hidden="true" className="fab fa-facebook-f"></span>
                                        </button>
                                        <button className="btn btn-primary btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                                            <span aria-hidden="true" className="fab fa-twitter"></span>
                                        </button>
                                        <button className="btn btn-primary btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                                            <span aria-hidden="true" className="fab fa-github"></span>
                                        </button>
                                    </div>
                                    <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                        <span className="font-weight-normal">
                                            Not registered?
                                        <a href="#" className="font-weight-bold">Create account</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )

}

export default LoginPage;

