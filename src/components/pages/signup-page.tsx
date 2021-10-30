import React from 'react'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'




const SignUpPage = ({ isLoggedIn, onSignUP }) => {

    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        const { username, email, password } = data;  
        onSignUP({
            "name": username,
            "email": email,
            "password": password
        })};

    const password = getValues("password");

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <main>
            <section className="section-header min-vh-100 d-flex bg-primary align-items-center">
                <div className="container">
                    <div className="row  align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 justify-content-center">
                            <div className="card bg-primary shadow-soft border-light p-4">
                                <div className="card-header text-center pb-0">
                                    <h2 className="mb-0 h5">Create Account</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/*<!-- Form -->*/}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputIcon2" className={errors.username && "alert-danger"}>Your username
                                            {errors.username && <span role="alert"> {errors.username.message}</span>}</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><span className="fas fa-user"></span></span>
                                                </div>
                                                <input className="form-control"
                                                    id="exampleInputIcon2"
                                                    {...register("username", {
                                                        required: "required",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9_]{2,}[a-zA-Z]+[0-9]*$/,
                                                            message: "does not match username format"
                                                        }
                                                    })}
                                                    placeholder="John" type="text" aria-label="username" />
                                                
                                            </div>
                                        </div>
                                        {/*<!-- End of Form -->*/}


                                        {/*<!-- Form -->*/}
                                        <div className="form-group">
                                            <label htmlFor="exampleInputIcon4" className={errors.email && "alert-danger"}>Your email
                                            {errors.email && <span role="alert"> {errors.email.message}</span>}</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><span className="fas fa-envelope"></span></span>
                                                </div>
                                                <input className="form-control"
                                                    id="exampleInputIcon4"
                                                    {...register("email", {
                                                        required: "required",
                                                        pattern: {
                                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            message: "does not match email format"
                                                        }
                                                    })}
                                                    placeholder="example@company.com" type="text" aria-label="email adress" />
                                                
                                            </div>
                                        </div>
                                        {/*<!-- End of Form -->*/}
                                        <div className="form-group">
                                            {/*<!-- Form -->*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword7" className={errors.password && "alert-danger"}>Password
                                                 { errors.password && <span role="alert"> {errors.password.message}</span>}</label>
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><span className="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input className="form-control" id="exampleInputPassword7" name="password"
                                                        {...register("password", {
                                                            required: "required",
                                                            minLength: {
                                                                value: 5,
                                                                message: "min length is 5"
                                                            }
                                                        })}
                                                        placeholder="Password" type="password" aria-label="Password" />
                                                </div>           
                                            </div>
                                            {/*<!-- End of Form -->*/}
                                            {/*<!-- Form -->*/}
                                            <div className="form-group">
                                                <label htmlFor="exampleConfirmPassword7" 
                                                className={errors.confirmPassword && "alert-danger"}>Confirm password
                                                 { errors.confirmPassword && <span role="alert"> {errors.confirmPassword.message}</span>}</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><span className="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input className="form-control" id="exampleConfirmPassword7" name="confirmPassword"
                                                 
                                                        {...register("confirmPassword", {
                                                            required: "required",
                                                            validate: {
                                                                equal: value => value === password || ' and password doesn\'t equal' ,
                                                                
                                                            }
                                                        }

                                                        )}
                                                        placeholder="Confirm password" type="password" aria-label="Password" />                                                                                                          
                                                </div>
                                            </div>
                                            {/*<!-- End of Form -->*/}
                                            <div className="form-check mb-4">
                                                <input className="form-check-input" type="checkbox"
                                                    {...register("agree", { required: true })}
                                                    value="" id="defaultCheck6" />
                                                   
                                                <label  className="form-check-label "  htmlFor="defaultCheck6">
                                                    <span  className={errors.agree && "alert-danger "}>I agree to the 
                                                    <a className={errors.agree && "alert-danger "} href="#">terms and conditions</a></span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                                    </form>
                                    <div className="mt-3 mb-4 text-center">
                                        <span className="font-weight-normal">or</span>
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
                                            Already have an account?
                                        <a href="/login" className="font-weight-bold">Login here</a>
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

export default SignUpPage;