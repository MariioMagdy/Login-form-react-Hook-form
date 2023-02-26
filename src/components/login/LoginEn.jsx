import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginEn({ login, changLang, lang }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        formState,
        reset,
        trigger,
        isSubmitting,
        watch,
    } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <section className="login" id="content">
                <div className="login-details">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/1000/svg"
                        fill="#fff"
                        className="svg-left"
                    >
                        <circle cx="-20" cy="-35" r="50" />
                    </svg>
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/1000/svg"
                        fill="#fff"
                        className="svg-right"
                    >
                        <circle cx="100" cy="1" r="30" />
                    </svg>
                    <div className="login-header">
                        <h2>Login Page</h2>
                        <span>Designed with Adobe XD</span>
                    </div>
                    <div className="login-body">
                        <div className="row justify-content-center">
                            <div className="login-leftSide col-lg-6 col-sm-12">
                                <h3 className="text-start">Logo</h3>
                                <picture>
                                    <img className="img-fluid" src={login} alt="" />
                                </picture>
                            </div>
                            <div className="login-rightSide d-flex flex-column justify-content-center text-start col-lg-6 col-sm-12">
                                <div className="p-4 watch-responsive">
                                    <div>
                                        <div className="d-flex justify-content-between watch-responsive">
                                            <h4>Welcome Back!</h4>
                                            <span
                                                className="fw-bold lang"
                                                onClick={changLang}
                                            >
                                                {lang ? "AR" : "EN"}
                                            </span>
                                        </div>
                                        <h6>Login to continue</h6>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                                        <div className="login-inputs d-flex flex-column gap-3 mb-3 ">
                                            <div className="input-field d-flex justify-content-center align-items-center">
                                                <span className="icon-user"></span>
                                                <input
                                                    className={
                                                        errors.email &&
                                                        "border border-danger"
                                                    }
                                                    autoFocus
                                                    placeholder="Write your Email"
                                                    name="email"
                                                    {...register("email", {
                                                        required: true,
                                                        pattern:
                                                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("email");
                                                    }}
                                                />
                                            </div>
                                            <span className="errorMsg">
                                                {errors.email?.type === "required" &&
                                                    "email is required"}
                                                {errors.email?.type === "pattern" &&
                                                    "Entered a wrong format"}
                                            </span>
                                            <div className="pass-field d-flex justify-content-center align-items-center">
                                                <span className="icon-lock"></span>
                                                <input
                                                    className={
                                                        errors.password &&
                                                        "border border-danger"
                                                    }
                                                    type="password"
                                                    placeholder="**************"
                                                    id="password"
                                                    name="password"
                                                    {...register("password", {
                                                        required: true,
                                                        minLength: 5,
                                                        maxLength: 20,
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("password");
                                                    }}
                                                />
                                            </div>
                                            <span className="errorMsg">
                                                {errors.password?.type === "required" &&
                                                    "password is required"}
                                                {errors.password?.type === "minLength" &&
                                                    "Entered Password is less than 5 characters"}
                                                {errors.password?.type === "maxLength" &&
                                                    "Entered Password is more than 20 characters"}
                                            </span>
                                        </div>
                                        <div className="d-flex text-center justify-content-between pb-4 watch-responsive">
                                            <div className="d-flex align-items-center gap-1">
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id="check-box"
                                                        name="check-box"
                                                    />
                                                </div>
                                                <label
                                                    className="login-linkColor"
                                                    htmlFor="check-box"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="login-linkColor">
                                                <a href="#">Forget Password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center py-2">
                                            <button
                                                type="submit"
                                                className="btn text-center"
                                                disabled={!formState.isValid}
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="login-newUser text-center">
                                    <a href="#" className="login-linkColor">
                                        New User? Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer d-flex justify-content-around pb-3">
                        <span>Copyright Reserved&copy;2021</span>
                        <span>Terms and Conditions | Privacy Policy</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginEn;
