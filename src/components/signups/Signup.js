import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebasefiles";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ass from "../../assests/a3.png";
import g from "../../assests/g.png";
import f from "../../assests/f.png";
import em from "../../assests/et1";
import em2 from "../../assests/wr.png";
import EmailSrength from "../login/component/EmailSrength";
import PasswordSrength from "../login/component/PasswordSrength";
import { connect } from "react-redux";
import { USERNAME } from "../redux/action/Action";
function Signup(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const histroy = useHistory();

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [name, SetName] = useState("");

    const submits = async (e) => {
        // e.preventDefault();
        console.log(email, password, name);
        props.username(name);

        try {
            toast.success("Signup SccessFully Welocme");
            const result = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            setTimeout(() => {
                histroy.push("/login");
            }, 1500);

            console.log(result);
        } catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                    toast.error(
                        "Email Id Is Not Match",
                        err.message,
                        <imgs src={em2} />
                    );
                    break;
                case "auth/user-disabled":
                    toast.error("user Is Disabled", err.message);
                    break;
                case "auth/user-not-found":
                    toast.error("User Not Found", err.message);
                    break;
                case "auth/wrong-password":
                    toast.error("Wrong password", err.message);
                    break;
                case "auth/email-disabled":
                    toast.error("User Already Regiters email", err.message);
                    break;
            }
        }
    };
    return (
        <div className="login-main">
            <div className="top-inside-main">
                <div className="left-login col-lg-6 col-sm-10 col-md-10">
                    <button onClick={() => histroy.goBack()} className="btss">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </button>
                    <h1 className="text-center mt-5 to">
                        Welcome Too <br />
                    </h1>
                    <p className="text-center to ms-5 mt-2 ">Signup Page</p>
                    <ToastContainer />

                    <div
                        className="image1"
                        style={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={ass}
                            style={{ width: "60%", objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className="right-login col-sm-10 col-md-10 col-lg-6">
                    <div className="forms">
                        <form onSubmit={handleSubmit(submits)}>
                            <h1 className="text-center mb-5">Signup</h1>
                            <div className="ms">
                                <label>UserName:</label>
                                <input
                                    {...register("name", {
                                        required: "no records",
                                    })}
                                    type="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => SetName(e.target.value)}
                                    placeholder="Enter your Name"
                                />

                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                        name field is Empty
                                    </span>
                                )}
                            </div>
                            <div className="ms mt-3">
                                <label>Email:</label>
                                <input
                                    {...register("email", {
                                        required: "no records",
                                    })}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    placeholder="Enter your Name"
                                />
                                {/* <p style={{ marginTop: "-8px" }}>
                                    <EmailSrength email={email} />
                                </p> */}
                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                        email field is Empty
                                    </span>
                                )}
                            </div>
                            <div className="ms">
                                <label className="mt-4">Password:</label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Minimum Password Type 6 Characters",
                                        },
                                    })}
                                    type="text"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        SetPassword(e.target.value)
                                    }
                                    placeholder="Enter your password"
                                    minlength="6"
                                />
                                <p style={{ marginTop: "-8px" }}>
                                    <PasswordSrength password={password} />
                                </p>
                                {errors.password && (
                                    <span style={{ color: "red" }}>
                                        password field is Empty
                                    </span>
                                )}
                            </div>
                            <div>
                                <p
                                    className="text-end mt-2 "
                                    style={{ color: "blue", fontSize: "16px" }}
                                >
                                    Forget Password
                                </p>
                            </div>
                            <button className="sub mt-1">Signin</button>
                            <div className="logos">
                                <div>
                                    <img src={g} className="f" />
                                </div>

                                <p
                                    className="text-middle mt-4 fs-5 fw-3 text-center"
                                    style={{
                                        color: "black",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                    }}
                                ></p>
                                <div>
                                    <img src={f} className="f" />
                                </div>
                            </div>
                            {/* 
                            <div>
                                <p
                                    className="text-middle mt-4 fs-5 fw-3 text-center"
                                    style={{ color: "black", fontSize: "20px" }}
                                    onClick={() => usehistory.push("/signup")}
                                >
                                    Register New User
                                </p>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        usernameset: state.usernames,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        username: (name) => {
            dispatch({ type: USERNAME, value: name });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
